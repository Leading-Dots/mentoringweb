

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { getInitials } from "@/lib/utils";

export function ProfilePopover() {
  const router = useNavigate();
  const { switchUserRole, user } = useAuth();
  const [open, setOpen] = useState(false);

  const handleProfileClick = () => {
    setOpen(false);
    router("/profile");
  };

  const handleSwitchRoleClick = () => {
    setOpen(false);
    switchUserRole();
  };

  if(!user) {
    return null;
  }

  return (

      <Avatar onClick={handleProfileClick} className="size-9 cursor-pointer">
      <AvatarImage src="/placeholder-avatar.jpg" />
      <AvatarFallback>
        {getInitials(user?.firstName, user?.lastName) || "U"}  
      </AvatarFallback>
      </Avatar>
  );
}
