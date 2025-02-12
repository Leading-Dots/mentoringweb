import { Mentor, Mentee } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SessionParticipantsCardProps {
  mentor: Mentor | null;
  mentee: Mentee | null;
}

const SessionParticipantsCard = ({
  mentor,
  mentee,
}: SessionParticipantsCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      {mentor && (
        <Link to={`/mentor/${mentor.mentorId}`}>
          <div className="flex items-center gap-2">
            <Avatar className="size-10 cursor-pointer hover:opacity-80">
              <AvatarImage
                src={mentor?.profilePictureUrl!!}
                alt={mentor?.firstName!!}
              />
              <AvatarFallback>
                {getInitials(mentor?.firstName, mentor?.lastName)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">
              {mentor?.firstName} {mentor?.lastName}
            </span>
          </div>
        </Link>
      )}
      {mentee && (
        <Link to={`/mentee/${mentee.menteeId}`}>
          <div className="flex items-center gap-2">
            <Avatar className="size-10 cursor-pointer hover:opacity-80">
              <AvatarImage
                src={mentee?.profilePictureUrl!!}
                alt={mentee?.firstName!!}
              />
              <AvatarFallback>
                {getInitials(mentee?.firstName, mentee?.lastName)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">
              {mentee?.firstName} {mentee?.lastName}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SessionParticipantsCard;
