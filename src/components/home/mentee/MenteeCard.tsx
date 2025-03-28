import type { Mentee } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenteeCardProps {
  mentee: Mentee;
}

export const MenteeCard = ({ mentee }: MenteeCardProps) => {
  const router = useNavigate();

  const handleProfileClick = () => {
    console.log(mentee.menteeId);
    router(`/mentee/${mentee.menteeId}`);
  };

  return (
    <Card
      className="transition-all hover:shadow-lg"
      aria-label="mentee card"
      onClick={handleProfileClick}
    >
      <CardContent className="pt-6 flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-primary">
        <AvatarImage
          src={mentee.profilePictureUrl || ""}
          alt={`${mentee.firstName} ${mentee.lastName}`}
        />
        <AvatarFallback className="text-lg bg-primary text-primary-foreground">
          {getInitials(mentee.firstName, mentee.lastName)}
        </AvatarFallback>
        </Avatar>
        <div>
        <h3 className="font-semibold text-lg">
          {mentee.firstName} {mentee.lastName}
        </h3>
        <p className="text-sm text-muted-foreground">{mentee.bio}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {mentee.topics?.slice(0, 2).map((skill) => (
        <Badge key={skill} variant="secondary" className="rounded-md">
          {skill}
        </Badge>
        ))}
        {mentee.topics && mentee.topics.length > 2 && (
        <Badge variant="secondary" className="rounded-md">
          +{mentee.topics.length - 2} more
        </Badge>
        )}
      </div>
      <div className="flex items-center justify-start sm:justify-evenly gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
        <Briefcase className="h-4 w-4 text-blue-500" />
        <span>{mentee.preferredMentorExperience} years exp. preferred</span>
        </div>
      </div>
      </CardContent>
    </Card>
  );
};
