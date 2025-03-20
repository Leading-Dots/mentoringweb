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
interface ViewIntroductionSessionProps {
  introSession: IntroductionSession;
  children: React.ReactNode;
}

export const ViewIntroductionSession = ({
  introSession,
  children,
}: ViewIntroductionSessionProps) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const Content = () => (
    <Card>
      <CardContent className="space-y-4 pt-4">
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

        <div className="space-y-3">
          {introSession.sessionDate && (
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {new Date(introSession?.sessionDate || "").toLocaleDateString()}
              </span>
            </div>
          )}
          {introSession.sessionDate && (
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {formatTime(new Date(introSession?.sessionDate || ""))}
              </span>
            </div>
          )}

          {introSession.duration && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{introSession.duration} minutes</span>
            </div>
          )}

          {introSession.meetingLink && (
            <div className="mt-4">
              <a
                href={introSession.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Join Meeting
              </a>
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
          <div className="px-4 pb-4">
            <Content />
          </div>
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
        <Content />
      </DialogContent>
    </Dialog>
  );
};
