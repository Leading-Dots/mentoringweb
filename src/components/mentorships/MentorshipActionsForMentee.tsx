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
import { IntroductionSession, Mentee, MentorshipStatus } from "@/API";
import { Button } from "../ui/button";
import client from "@/lib/apiClient";
import { listIntroductionSessions } from "@/graphql/queries";
import { ViewIntroductionSession } from "../modal/ViewIntroductionSession";

interface MentorshipActionsProps {
  mentee: Mentee;
  mentorshipStatus: MentorshipStatus;
  mentorshipId: string;
}

const MentorshipActionsForMentee = ({
  mentee,
  mentorshipId,
  mentorshipStatus,
}: MentorshipActionsProps) => {
  const router = useNavigate();
  const [introductionMeeting, setIntroductionMeeting] =
    React.useState<IntroductionSession | null>(null);
  const [loading, setLoading] = React.useState(false);

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
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuItem
          onClick={() => {
            router(`/mentee/${mentee.menteeId}`);
          }}
        >
          View Profile
        </DropdownMenuItem>
        {mentorshipStatus === MentorshipStatus.ACCEPTED && (
          <CreateSessionRequestModal otherUserId={mentee.menteeId}>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Schedule Meeting
            </DropdownMenuItem>
          </CreateSessionRequestModal>
        )}
        {mentorshipStatus === MentorshipStatus.INTRODUCTION && (
          <ViewIntroductionSession introSession={introductionMeeting}>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              View Introduction Meeting
            </DropdownMenuItem>
          </ViewIntroductionSession>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            showToast("Feature coming soon", "info");
          }}
          className="text-red-600"
        >
          Remove Mentee
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MentorshipActionsForMentee;
