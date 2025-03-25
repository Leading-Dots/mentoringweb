import { Mentee, Mentor } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

interface UserCardProps {
  otherUserData: Mentor | Mentee;
  role: string;
}

export function UserCard({ otherUserData, role }: UserCardProps) {
    console.log(otherUserData);
  const { firstName, lastName, profilePictureUrl, bio } = otherUserData;
  const initials = getInitials(firstName, lastName);

  return (
    <div className="flex items-start space-x-6 p-6 border rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200 shadow-sm">
      <Avatar className="h-16 w-16 bg-black ring-2 ring-primary/10">
      <AvatarImage src={profilePictureUrl ?? ""} alt={`${firstName} ${lastName}`} />
      <AvatarFallback className="text-lg">{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-primary/80 capitalize">
        Book session with {role}
      </p>
      <h3 className="text-lg font-semibold">
        {firstName} {lastName}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {bio}
      </p>
      </div>
    </div>
  );
}
