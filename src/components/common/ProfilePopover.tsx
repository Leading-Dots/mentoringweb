"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle, SwitchCamera, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export function ProfilePopover() {
  const router = useNavigate();
  const { switchUserRole } = useAuth();
  const [open, setOpen] = useState(false);

  const handleProfileClick = () => {
    setOpen(false);
    router("/profile");
  };

  const handleSwitchRoleClick = () => {
    setOpen(false);
    switchUserRole();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 w-full justify-start"
            onClick={handleProfileClick}
          >
            <UserCircle className="h-4 w-4" />
            Go to Profile
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 w-full justify-start"
            onClick={handleSwitchRoleClick}
          >
            <SwitchCamera className="h-4 w-4" />
            Switch Role
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
