import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { SessionRequestForm } from "@/components/session/SessionRequestForm";
import { useEffect, useState } from "react";
import { UserCard } from "../common/UserCard";
import { getUser } from "@/lib/dbActions";
import {
  Mentee,
  Mentor,
  MentorshipStatus,
  ProfileStatus,
  SessionRequestStatus,
} from "@/API";
import { showToast } from "@/lib/toast";
import { DialogLoader } from "../common/DialogLoader";
import client from "@/lib/apiClient";
import {
  createIntroductionRequest,
  createSessionRequest,
} from "@/graphql/mutations";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer";
import { sendNotification } from "@/lib/firebase/messaging";
import { IntroductionRequestForm } from "../profile/IntroductionRequestForm";

export function CreateIntroductionModal({
  children,
  otherUserId,
}: {
  children: React.ReactNode;
  otherUserId: string;
}) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [otherUser, setOtherUser] = useState<Mentor | Mentee | null>(null);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isPublished = user?.profileStatus === ProfileStatus.PUBLISHED;
  const userRole = user?.role;
  const otherRole = userRole === "mentor" ? "mentee" : "mentor";

  const handleSubmit = async (data: any) => {
    try {
      if (!isPublished) {
        showToast(
          "You need to publish your profile to send a request",
          "error"
        );
        return;
      }
      setLoading(true);

      console.log("Form data:", data);

      await client.graphql({
        query: createIntroductionRequest,
        variables: {
          input: {
            ...data,
            status: MentorshipStatus.PENDING,
            initiatedBy: userRole,
            mentorID: userRole === "mentor" ? user?.mentorId : otherUserId,
            menteeID: userRole === "mentee" ? user?.menteeId : otherUserId,
          },
        },
      });

      showToast("Request sent successfully", "success");

      await sendNotification({
        title: "New Introduction Request",
        body: `You have a new introduction request from ${user?.firstName} ${user?.lastName}`,
        recipientId: otherUserId,
        recipientRole: otherRole,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  const getOtherSessionUser = async (userId: string) => {
    try {
      setLoading(true);
      const otherUser = await getUser(userId, otherRole);
      console.log("getOtherSessionUser", otherUser);
      if (otherUser) {
        setOtherUser(otherUser);
      } else {
        console.error("Error fetching user details: User not found");
        showToast("User not found", "error");
        setOpen(false);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      getOtherSessionUser(otherUserId);
    }
  }, [open]);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent className="">
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="h-full overflow-auto p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">
                  Request An Introduction
                </DrawerTitle>
                <DrawerDescription>
                  Fill in the details to request mentorship.
                </DrawerDescription>
              </DrawerHeader>
              {otherUser && (
                <UserCard otherUserData={otherUser} role={otherRole} />
              )}
              <div className="grid gap-4 py-4">
                <IntroductionRequestForm onSubmit={handleSubmit} />
              </div>
              <div className="flex space-x-2">
                <Button
                  type="submit"
                  form="introduction-request-form"
                  className="w-full"
                >
                  Send
                </Button>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-full max-h-[90vh] overflow-y-auto">
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Request an Introduction
              </DialogTitle>
              <DialogDescription>
                Fill in the details to request mentorship.
              </DialogDescription>
            </DialogHeader>
            {otherUser && (
              <UserCard otherUserData={otherUser} role={otherRole} />
            )}
            <div className="grid gap-4 py-4">
              <IntroductionRequestForm onSubmit={handleSubmit} />
            </div>
            <div className="flex w-full space-x-2">
              <Button
                type="submit"
                className="w-full"
                form="introduction-request-form"
              >
                Send
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
