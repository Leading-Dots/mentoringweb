import type { Mentor } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { Briefcase, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard = ({ mentor }: MentorCardProps) => {
  const router = useNavigate();

  const handleProfileClick = () => {
    router(`/mentor/${mentor!.mentorId}`);
  };

  return (
    <Card
      className="transition-all hover:shadow-lg"
      aria-label="Mentor card"
      onClick={handleProfileClick}
    >
      <CardContent className="pt-6 flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-primary">
        <AvatarImage
          src={mentor.profilePictureUrl || ""}
          alt={`${mentor.firstName} ${mentor.lastName}`}
        />
        <AvatarFallback className="text-lg bg-primary text-primary-foreground">
          {getInitials(mentor.firstName, mentor.lastName)}
        </AvatarFallback>
        </Avatar>
        <div>
        <h3 className="font-semibold text-lg">
          {mentor.firstName} {mentor.lastName}
        </h3>
        <p className="text-sm text-muted-foreground">{mentor.bio}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4 justify-start">
        {mentor.expertise?.slice(0, 2).map((skill) => (
        <Badge key={skill} variant="secondary" className="rounded-md">
          {skill}
        </Badge>
        ))}
        {mentor.expertise && mentor.expertise.length > 2 && (
        <Badge variant="secondary" className="rounded-md">
          +{mentor.expertise.length - 2} more
        </Badge>
        )}
      </div>
      <div className="flex items-center justify-start sm:justify-evenly gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
        <DollarSign className="h-4 w-4 text-green-500" />
        <span>${mentor.hourlyRate}/hr</span>
        </div>
        <div className="flex items-center gap-1">
        <Briefcase className="h-4 w-4 text-blue-500" />
        <span>{mentor.yearsOfExperience} years exp.</span>
        </div>
      </div>
      </CardContent>
    </Card>
  );
};
