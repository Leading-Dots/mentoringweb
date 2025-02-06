import type { Mentor } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, DollarSign } from "lucide-react";

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard = ({ mentor }: MentorCardProps) => {
  const getInitials = (firstName?: string | null, lastName?: string | null) => {
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
  };

  return (
    
    <Card className="transition-all hover:shadow-lg" aria-label="Mentor card" >
      <CardContent className="pt-6 flex flex-col gap-1">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
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
        <div className="flex justify-between gap-2 mb-4">
          {mentor.expertise?.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-evenly gap-2 text-sm text-muted-foreground">
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
