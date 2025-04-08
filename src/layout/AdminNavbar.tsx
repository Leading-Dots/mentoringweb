import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

import {
  BookOpenText,
  GaugeCircle,
  HomeIcon,
  LogOut,
  Menu,
  MessagesSquare,
  Settings,
  Users,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
  isExternal?: boolean;
};

const AdminNavbar = () => {
  const router = useNavigate();
  const { signOut, user } = useAuth();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const adminNavItems: NavItem[] = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Mentors",
      url: "/admin/mentors",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mentees",
      url: "/admin/mentees",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const NavContent = () => {
    return (
      <nav className="space-y-4 my-4">
        {adminNavItems.map((item) => {
          const isActive = location.pathname === item.url;

          return (
            <Link
              onClick={() => setOpen(false)}
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 rounded-lg p-2 text-sm transition-colors",
                isActive
                  ? "bg-muted text-secondary-foreground"
                  : "hover:bg-secondary/80"
              )}
              {...(item?.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-6 gap-6">
        <div className="flex flex-col items-center">
          <Link to="/admin/dashboard" className="">
            <img
              src="/logo.png"
              alt="Admin Dashboard"
              className="h-20 w-80 object-cover"
            />
          </Link>
        </div>

        <NavContent />

        <div className="flex flex-col items-start gap-2 mt-auto">
          <Button onClick={signOut} variant="ghost" size="sm">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          asChild
          className="flex items-center justify-start m-2 md:hidden"
        >
          <Menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-6">
          <div className="flex flex-col items-center">
            <Link to="/admin/dashboard">
              <img
                src="/logo.png"
                alt="Admin Dashboard"
                className="h-20 w-80 object-cover"
              />
            </Link>
          </div>
          <NavContent />
          <div className="flex flex-col items-start gap-2 mt-auto">
            <Button onClick={signOut} variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AdminNavbar;
