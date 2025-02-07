import { Mentee, Mentor } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

interface UserCardProps {
  otherUserData: Mentor | Mentee;
  role: string;
}

export function UserCard({ otherUserData, role }: UserCardProps) {
    console.log(otherUserData);
  const { firstName, lastName, profilePictureUrl } = otherUserData;
  const initials = getInitials(firstName, lastName);

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg bg-muted/50">
      <Avatar className="h-12 w-12 bg-black">
        <AvatarImage src={profilePictureUrl ?? ""} alt={`${firstName} ${lastName}`} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          Book session with {role}:
        </p>
        <p className="text-sm font-medium">
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
}
