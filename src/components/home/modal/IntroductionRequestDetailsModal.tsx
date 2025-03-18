import { IntroductionRequest, MentorshipStatus } from "@/API";
import React from "react";
import { showToast } from "@/lib/toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import client from "@/lib/apiClient";
import { updateIntroductionRequest } from "@/graphql/mutations";
import { UserCard } from "@/components/common/UserCard";
import { UserRole } from "types";
import { addMentorship, getUser } from "@/lib/dbActions";
import { DialogLoader } from "@/components/common/DialogLoader";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { sendNotification } from "@/lib/firebase/messaging";

interface IntroductionRequestDetailsModalProps {
  introRequest: IntroductionRequest;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const IntroductionRequestDetailsModal = ({
  introRequest,
  children,
  onConfirm,
}: IntroductionRequestDetailsModalProps) => {
  const router = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [initiatorData, setInitiatorData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const isMobile = useMediaQuery("(max-width: 640px)");

  const onClose = () => {
    setOpen(false);
  };

  const onAccept = async (introRequest: IntroductionRequest) => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: updateIntroductionRequest,
        variables: {
          input: {
            id: introRequest.id,
            status: MentorshipStatus.INTRODUCTION,
          },
        },
      });

      if (data) {
        const mentorship = await addMentorship(
          data.updateIntroductionRequest.mentorID,
          data.updateIntroductionRequest.menteeID
        );
        if (!mentorship) {
          showToast("Failed to create mentorship", "error");
        }

        sendNotification({
          title: "Introduction Request Accepted",
          body: `Your introduction request has been accepted!`,
          recipientId:
            introRequest.initiatedBy === "mentor"
              ? introRequest.mentorID
              : introRequest.menteeID,
          recipientRole:
            introRequest.initiatedBy === "mentor" ? "mentor" : "mentee",
        });

        showToast(
          "Introduction request accepted",
          "success",
          "You have successfully accepted the introduction request"
        );

        router("/home");
        onConfirm?.();
      }
    } catch (error) {
      showToast("Failed to accept introduction request", "error");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const onReject = async (introRequest: IntroductionRequest) => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: updateIntroductionRequest,
        variables: {
          input: {
            id: introRequest.id,
            status: MentorshipStatus.REJECTED,
          },
        },
      });

      if (data) {
        showToast(
          "Introduction request rejected",
          "success",
          "You have successfully rejected the introduction request"
        );
        onConfirm?.();
      }
    } catch (error) {
      showToast("Failed to reject introduction request", "error");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const getInitiatorData = async () => {
    try {
      setLoading(true);
      const initiatorRole = introRequest.initiatedBy as UserRole;
      const initiatorId =
        initiatorRole === "mentor"
          ? introRequest.mentorID
          : introRequest.menteeID;
      const data = await getUser(initiatorId, initiatorRole);
      if (!data) {
        throw new Error("User not found");
      }
      setInitiatorData(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (open) {
      getInitiatorData();
    }
  }, [open]);

  const Content = () => (
    <>
      <Card>
        <CardContent className="space-y-2 w-full">
          <Link
            to={
              introRequest.initiatedBy === "mentor"
                ? `/mentos/${introRequest.mentorID}`
                : `/mentee/${introRequest.menteeID}`
            }
          >
            <UserCard
              otherUserData={initiatorData}
              role={introRequest.initiatedBy as UserRole}
            />
          </Link>
          <div className="space-y-4">
            {introRequest.title && (
              <div className="flex gap-3 p-3 rounded-lg">
                <MessageSquare className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <span className="text-sm text-gray-500">Title</span>
                  <p className="text-sm mt-1">{introRequest.title}</p>
                </div>
              </div>
            )}

            {introRequest.note && (
              <div className="flex gap-3 p-3 rounded-lg">
                <MessageSquare className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <span className="text-sm text-gray-500">Note</span>
                  <p className="text-sm mt-1">{introRequest.note}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="gap-2 w-full">
        <Button className="w-full mb-2" onClick={() => onAccept(introRequest)}>
          Accept
        </Button>
        <Button
          className="w-full text-destructive"
          variant="outline"
          onClick={() => onReject(introRequest)}
        >
          Reject
        </Button>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="px-4 pb-4">
              <DrawerHeader className="pt-4">
                <DrawerTitle className="text-2xl">
                  Introduction Request Details
                </DrawerTitle>
                <DrawerDescription>
                  Review the introduction request details and take action
                </DrawerDescription>
              </DrawerHeader>
              <Content />
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Introduction Request Details
              </DialogTitle>
              <DialogDescription>
                Review the introduction request details and take action
              </DialogDescription>
            </DialogHeader>
            <Content />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IntroductionRequestDetailsModal;
