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
import { CreateIntroductionSessionModal } from "@/components/modal/CreateIntroductionModal";

interface MentorshipRequestProps {
  introRequest: IntroductionRequest;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const MentorshipRequestDetailsModal = ({
  introRequest,
  children,
  onConfirm,
}: MentorshipRequestProps) => {
  const router = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [initiatorData, setInitiatorData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const isMobile = useMediaQuery("(max-width: 640px)");

  const onClose = () => {
    setOpen(false);
  };

  //This basically creates the mentorship directly
  const onMentorshipRequest = async (introRequest: IntroductionRequest) => {
    try {
      //set the introRequest status to complete

      const { data } = await client.graphql({
        query: updateIntroductionRequest,
        variables: {
          input: {
            id: introRequest.id,
            status: MentorshipStatus.ACCEPTED,
          },
        },
      });

      const mentorship = await addMentorship(
        data.updateIntroductionRequest.mentorID,
        data.updateIntroductionRequest.menteeID,
        MentorshipStatus.ACCEPTED
      );

      if (!mentorship) {
        showToast("Failed to create mentorship", "error");
      }

      showToast("Mentorship request accepted", "success", "You are now in mentorship session!");

      sendNotification({
        title: "Mentor Request Accepted",
        body: `You are now in mentorship session!`,
        recipientId:
          introRequest.initiatedBy === "mentor"
            ? introRequest.mentorID
            : introRequest.menteeID,
        recipientRole:
          introRequest.initiatedBy === "mentor" ? "mentor" : "mentee",
      });
    } catch (error) {
      showToast("Failed to accept introduction request", "error");
    } finally {
      setLoading(false);
      onClose();
    }
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
      <Card className="mb-4">
        <CardContent className="space-y-5 w-full">
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
          <div className="space-y-3">
            {introRequest.note && (
              <div className="flex gap-3 p-4 rounded-lg bg-muted border">
                <MessageSquare className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <span className="text-sm font-medium text-primary">Note</span>
                  <p className="text-sm mt-1 text-muted-foreground">
                    {introRequest.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="gap-4  w-full">
        <Button className="w-full mb-2" onClick={() => onMentorshipRequest(introRequest)}>
          Accept Mentorship
        </Button>
        <CreateIntroductionSessionModal
          menteeId={introRequest.menteeID}
          introductionRequest={introRequest}
          mentorId={introRequest.mentorID}
          onDone={() => {
            onClose();
            router("/home");
          }}
        >
          <Button variant="outline" className="w-full" >
            Request Introduction Session
          </Button>
        </CreateIntroductionSessionModal>
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
                  {introRequest.title}
                </DrawerTitle>
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
                {introRequest.title}
              </DialogTitle>
            </DialogHeader>
            <Content />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MentorshipRequestDetailsModal;
