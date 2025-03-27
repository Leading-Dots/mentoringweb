import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Users } from "lucide-react";
import { Mentee, Mentor } from "@/API";

interface ParticipantsProps {
  mentor: Mentor;
  mentee: Mentee;
}

const Participants = ({ mentor, mentee }: ParticipantsProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Users className="h-4 w-4 mr-2 text-primary" />
          Participants
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Mentor */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={mentor?.profilePictureUrl || ""}
              alt={mentor?.name || "Mentor"}
            />
            <AvatarFallback>{mentor?.name?.charAt(0) || "M"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{mentor?.name || "Mentor"}</p>
            <p className="text-xs text-muted-foreground">Mentor</p>
          </div>
        </div>

        {/* Mentee */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={mentee?.profilePictureUrl || ""}
              alt={mentee?.name || "Mentee"}
            />
            <AvatarFallback>{mentee?.name?.charAt(0) || "M"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{mentee?.name || "Mentee"}</p>
            <p className="text-xs text-muted-foreground">Mentee</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Participants;
