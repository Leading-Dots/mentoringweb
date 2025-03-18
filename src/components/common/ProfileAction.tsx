import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";
import { Mentorship, MentorshipStatus } from "@/API";
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, CalendarPlus, LogIn } from "lucide-react";

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
  if (isGuest) {
    return (
      <Link to="/login" className="w-full sm:w-auto">
        <Button className="w-full sm:w-auto gap-2">
          <LogIn className="w-4 h-4" />
          Login to Connect
        </Button>
      </Link>
    );
  }

  const mentorshipStatus = currentMentorship?.mentorshipStatus;

  const canMessage = mentorshipStatus === MentorshipStatus.ACCEPTED || mentorshipStatus === MentorshipStatus.INTRODUCTION;

  const renderActionButton = () => {
    if (!currentMentorship) {
      return (
        <CreateSessionRequestModal otherUserId={userId}>
          <Button className="gap-2 w-full sm:w-auto">
            <Calendar className="w-4 h-4" />
            Book Introduction
          </Button>
        </CreateSessionRequestModal>
      );
    }

    switch (mentorshipStatus) {
      case MentorshipStatus.INTRODUCTION:
        return (
          <Link to={`/mentorship/${currentMentorship.id}`} className="w-full sm:w-auto">
            <Button variant="outline" className="gap-2 w-full">
              <Calendar className="w-4 h-4" />
              View Introduction Request
            </Button>
          </Link>
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