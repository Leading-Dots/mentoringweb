import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IntroductionSession, MentorshipStatus } from "@/API";
import { Card, CardContent } from "@/components/ui/card";
import { formatTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Timer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { formatDate } from "date-fns";
import client from "@/lib/apiClient";
import { updateMentorshipStatus } from "@/lib/dbActions";
import { updateIntroductionSession } from "@/graphql/mutations";
import { showToast } from "@/lib/toast";
import { sendNotification } from "@/lib/firebase/messaging";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { DialogLoader } from "../common/DialogLoader";
interface ViewIntroductionSessionProps {
  introSession: IntroductionSession;
  children: React.ReactNode;
}

export const ViewIntroductionSession = ({
  introSession,
  children,
}: ViewIntroductionSessionProps) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const router = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const isDatePassed =
    introSession.sessionDate && new Date(introSession.sessionDate) < new Date();
  const isDateToday =
    introSession.sessionDate &&
    new Date(introSession.sessionDate).toDateString() ===
      new Date().toDateString();

  const acceptMentorship = async () => {
    try {
      setLoading(true);
      //update the introduction session to be completed
      const { data } = await client.graphql({
        query: updateIntroductionSession,
        variables: {
          input: {
            id: introSession.id,
            sessionStatus: MentorshipStatus.ACCEPTED,
          },
        },
      });

      if (data) {
        console.log("Mentorship Accepted");

        //update the mentorship status to accepted
        const mentorship = await updateMentorshipStatus(
          introSession.mentorshipID,
          MentorshipStatus.ACCEPTED
        );
        if (mentorship) {
          console.log("Mentorship Accepted");
        }

        showToast(
          "Mentorship request accepted",
          "success",
          "You are now in mentorship session!"
        );

        sendNotification({
          title: "Mentorship Request Accepted",
          body: `You are now in mentorship session with ${introSession?.mentorName}`,
          recipientId: introSession.menteeID,
          recipientRole: "mentee",
        });

        router("/mentorships");
      }
    } catch (error) {
      console.error("Error accepting mentorship:", error);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const Content = () => (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <Badge
            variant={
              introSession.sessionStatus === MentorshipStatus.ACCEPTED
                ? "default"
                : "secondary"
            }
          >
            {introSession.sessionStatus}
          </Badge>
        </div>

        <div className="space-y-4">
          {introSession.sessionDate && (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted">
                <CalendarDays className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Date</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(
                    new Date(introSession.sessionDate),
                    "EEEE, MMMM do, yyyy"
                  )}
                </p>
              </div>
            </div>
          )}

          {introSession.sessionDate && (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted">
                <Timer className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Time</p>
                <p className="text-sm text-muted-foreground">
                  {formatTime(new Date(introSession.sessionDate))}
                </p>
              </div>
            </div>
          )}

          {introSession.duration && (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted">
                <Clock className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Duration</p>
                <p className="text-sm text-muted-foreground">
                  {introSession.duration} minutes
                </p>
              </div>
            </div>
          )}

          {(isDatePassed || introSession.meetingLink) && (
            <div className="mt-6 flex justify-end">
              {isDatePassed && user?.role === "mentor" ? (
                <Button
                  onClick={acceptMentorship}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Accept Mentorship
                </Button>
              ) : (
                <a
                  href={introSession.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Join Meeting
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Introduction Session Details</DrawerTitle>
          </DrawerHeader>
          <div className="p-2">{loading ? <DialogLoader /> : <Content />}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Introduction Session Details</DialogTitle>
        </DialogHeader>
        {loading ? <DialogLoader /> : <Content />}
      </DialogContent>
    </Dialog>
  );
};
