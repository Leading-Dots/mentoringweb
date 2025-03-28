import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";
import { IntroductionSession, Mentorship, MentorshipStatus } from "@/API";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Calendar,
  CalendarPlus,
  LogIn,
  UserPlus,
} from "lucide-react";
import { CreateIntroductionModal } from "../modal/CreateIntroductionRequestModal";
import { listIntroductionSessions } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { useEffect, useState } from "react";
import { ViewIntroductionSession } from "../modal/ViewIntroductionSession";
import { set } from "date-fns";

interface ProfileActionsProps {
  currentMentorship: Mentorship | null;
  userId: string;
  isCurrentUser: boolean;
  isGuest: boolean;
  onChatClick: () => void;
}

export const ProfileActions = ({
  currentMentorship,
  userId,
  isCurrentUser,
  isGuest,
  onChatClick,
}: ProfileActionsProps) => {



 
  const [introductionMeeting, setIntroductionMeeting] =
    useState<IntroductionSession | null>(null);

  const [loading, setLoading] = useState(false);
  if (isGuest) {
    return (
      <div className="flex flex-col sm:flex-row gap-2 pt-2">
        <Link to="/login" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto gap-2">
            <LogIn className="w-4 h-4" />
            Login to Connect
          </Button>
        </Link>
      </div> 
    );
  }

  const mentorshipStatus = currentMentorship?.mentorshipStatus;

  const canMessage =
    mentorshipStatus === MentorshipStatus.ACCEPTED ||
    mentorshipStatus === MentorshipStatus.INTRODUCTION;

  const getIntroductionMeeting = async () => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: listIntroductionSessions,
        variables: {
          filter: {
            mentorshipID: {
              eq: currentMentorship?.id,
            },
          },
        },
      });
      if (data.listIntroductionSessions.items.length > 0) {
        setIntroductionMeeting(data.listIntroductionSessions.items[0]);
        return data.listIntroductionSessions.items[0];
      }
      return null;
    } catch (error) {
      console.error("Error fetching introduction meeting", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentMentorship) {
      getIntroductionMeeting();
    }
  }, []);

  const renderActionButton = () => {
    if (!currentMentorship) {
      return (
        <CreateIntroductionModal otherUserId={userId}>
          <Button
            variant="outline"
            className="gap-2 w-full sm:w-auto hover:bg-primary hover:text-primary-foreground"
          >
            <UserPlus className="w-4 h-4" />
            Send Introduction
          </Button>
        </CreateIntroductionModal>
      );
    }

    switch (mentorshipStatus) {
      case MentorshipStatus.INTRODUCTION:
        return loading ? (
          <Button variant="outline" className="w-full sm:w-auto">
            Loading...
          </Button>
        ) : (
          introductionMeeting && 
          <ViewIntroductionSession introSession={introductionMeeting}>
            <Button variant="outline" className="">
              <Calendar className="w-4 h-4" />
              View Introduction Meeting
            </Button>
          </ViewIntroductionSession>
        );
      case MentorshipStatus.ACCEPTED:
        return (
          <CreateSessionRequestModal otherUserId={userId}>
            <Button className="gap-2 w-full sm:w-auto">
              <CalendarPlus className="w-4 h-4" />
              Schedule Session
            </Button>
          </CreateSessionRequestModal>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-2">
      {canMessage && (
        <Button
          variant="outline"
          onClick={onChatClick}
          className="gap-2 w-full sm:w-auto"
        >
          <MessageCircle className="w-4 h-4" />
          Message
        </Button>
      )}
      {!isCurrentUser && renderActionButton()}
    </div>
  );
};
