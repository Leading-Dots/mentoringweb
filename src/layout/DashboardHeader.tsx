import { ProfilePopover } from "@/components/common/ProfilePopover";
import { RoleBadge } from "@/components/common/RoleBadge";
import { useNotifications } from "@/context/notificationStore";
import { useAuth } from "@/hooks/useAuth";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Bell, Inbox } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardHeader = () => {
  const location = useLocation();
  const { user } = useAuth();
  const {notificationCount} = useNotifications();


  const formatHeaderTitle = (pathname: string) => {
    // Get the first part of the path (e.g., 'profile' from 'profile/steps')
    const firstPath = pathname.split("/").filter(Boolean)[0] || "";

    // Split by hyphens and format only the first part
    const path = firstPath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    useDocumentTitle(path);
    return path;
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <h1 className="text-2xl font-semibold">
        {formatHeaderTitle(location.pathname)}
      </h1>
      <div className="flex flex-1 justify-end items-center gap-3">
        <RoleBadge role={user ? user?.role : "guest"} />
        <ProfilePopover />
        {user && (
          <Link to="/notifications" className="relative">
            <div className="flex items-center cursor-pointer">
              <Bell size={24} />
              {notificationCount > 0 && (
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">{notificationCount}</span>
                </div>
              )}
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
