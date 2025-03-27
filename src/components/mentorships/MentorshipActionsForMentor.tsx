import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { CreateSessionRequestModal } from "../modal/CreateSessionRequestModal";
import { showToast } from "@/lib/toast";
import { useNavigate } from "react-router-dom";
import { IntroductionSession, Mentee, Mentor, MentorshipStatus } from "@/API";
import { Button } from "../ui/button";
import client from "@/lib/apiClient";
import { listIntroductionSessions } from "@/graphql/queries";
import { ViewIntroductionSession } from "../modal/ViewIntroductionSession";

interface MentorshipActionsForMentorProps {
  mentor: Mentor;
  mentorshipStatus: MentorshipStatus;
  mentorshipId: string;
}

const MentorshipActionsForMentor = ({
  mentor,
  mentorshipId,
  mentorshipStatus,
}: MentorshipActionsForMentorProps) => {
  const router = useNavigate();
  const [introductionMeeting, setIntroductionMeeting] =
    React.useState<IntroductionSession | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const fetchIntroductionSession = async () => {
    try {
      if (mentorshipStatus !== MentorshipStatus.INTRODUCTION) return;
      setLoading(true);
      const { data } = await client.graphql({
        query: listIntroductionSessions,
        variables: {
          filter: {
            mentorshipID: {
              eq: mentorshipId,
            },
          },
        },
      });
      if (data) {
        setIntroductionMeeting(data.listIntroductionSessions.items[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIntroductionSession();
  }, []);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  >
        <DropdownMenuItem
          onSelect={() => {
            router(`/mentor/${mentor.mentorId}`);
            setOpen(false);
          }}
        >
          View Profile
        </DropdownMenuItem>
        {mentorshipStatus === MentorshipStatus.ACCEPTED && (
          <CreateSessionRequestModal otherUserId={mentor.mentorId}>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              Schedule Meeting
            </DropdownMenuItem>
          </CreateSessionRequestModal>
        )}
        {mentorshipStatus === MentorshipStatus.INTRODUCTION && (
          <ViewIntroductionSession introSession={introductionMeeting}>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              View Introduction Meeting
            </DropdownMenuItem>
          </ViewIntroductionSession>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setOpen(false);
            showToast("Feature coming soon", "info");
          }}
          className="text-red-600"
        >
          Remove Mentor
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MentorshipActionsForMentor;
