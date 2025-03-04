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
import { Mentee, Mentor, SessionRequestStatus } from "@/API";
import { showToast } from "@/lib/toast";
import { DialogLoader } from "../common/DialogLoader";
import client from "@/lib/apiClient";
import { createSessionRequest } from "@/graphql/mutations";
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

export function CreateSessionRequestModal({
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
  const userRole = user?.role;
  const otherRole = userRole === "mentor" ? "mentee" : "mentor";

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      // TODO: Implement your submission logic here
      console.log("Form data:", data);

      if (userRole === "mentor") {
        // Send session request to mentee

        const requestData = {
          sessionTitle: data.title,
          mentorID: user?.mentorId,
          menteeID: otherUserId,
          status: SessionRequestStatus.SENT,
          mentorNote: data.mentorNote,
          menteeNote: "No Note",
          duration: data.duration,
          proposedSessionTime: data.proposedSessionTime,
          proposedCost: data.proposedCost,
          sessionID: "nosession",
          initiatedBy: userRole,
        };

        console.log("requestData", requestData);
        const response = await client.graphql({
          query: createSessionRequest,
          variables: {
            input: requestData,
          },
        });

        showToast("Session request sent successfully", "success");
        return response;
      } else {
        // Send session request to mentor
        const response = await client.graphql({
          query: createSessionRequest,
          variables: {
            input: {
              sessionTitle: data.title,
              mentorID: otherUserId,
              menteeID: user?.menteeId,
              status: SessionRequestStatus.SENT,
              menteeNote: data.menteeNote,
              mentorNote: "No Note",
              duration: data.duration,
              proposedSessionTime: data.proposedSessionTime,
              proposedCost: data.proposedCost,
              sessionID: "nosession",
              initiatedBy: userRole,
            },
          },
        });

        showToast("Session request sent successfully", "success");
        return response;
      }
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
        <DrawerContent className="h-[90vh]">
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="h-full overflow-auto p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">
                  Request a Session
                </DrawerTitle>
                <DrawerDescription>
                  Fill in the details to request a new mentoring session.
                </DrawerDescription>
              </DrawerHeader>
              {otherUser && (
                <UserCard otherUserData={otherUser} role={otherRole} />
              )}
              <div className="grid gap-4 py-4">
                <SessionRequestForm
                  onSubmit={handleSubmit}
                  isMentor={userRole === "mentor"}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" form="session-request-form">
                  Create Request
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
              <DialogTitle className="text-2xl">Request a Session</DialogTitle>
              <DialogDescription>
                Fill in the details to request a new mentoring session.
              </DialogDescription>
            </DialogHeader>
            {otherUser && (
              <UserCard otherUserData={otherUser} role={otherRole} />
            )}
            <div className="grid gap-4 py-4">
              <SessionRequestForm
                onSubmit={handleSubmit}
                isMentor={userRole === "mentor"}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" form="session-request-form">
                Create Request
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
