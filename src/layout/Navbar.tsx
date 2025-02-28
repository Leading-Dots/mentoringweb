import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  GaugeCircle,
  HomeIcon,
  LogIn,
  LogOut,
  Menu,
  MessagesSquare,
  School2,
  Settings,
  User2,
  UserCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { ProfileStatus } from "@/API";

type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
  isExternal?: boolean;
};

const Navbar = () => {
  const router = useNavigate();
  const { signOut, user } = useAuth();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const guestNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Login",
      url: "/login",
      icon: <LogIn className="h-5 w-5" />,
    },
  ];

  const mentorNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },

    {
      title: "Sessions",
      url: "/sessions",
      icon: <BookOpenText className="h-5 w-5" />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const menteeNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Search Mentors",
      url: "/search-mentors",
      icon: <UserCircle2 className="h-5 w-5" />,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: <BookOpenText className="h-5 w-5" />,
    },

    {
      title: "Settings",
      url: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const navItems = user?.role === "mentor" ? mentorNavItems : menteeNavItems;
  const isPublished = user?.profileStatus === "PUBLISHED";

  const NavContent = () => {
    // For guest users, show guest nav items
    if (!user) {
      return (
        <nav className="space-y-4 my-4">
          {guestNavItems.map((item) => {
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
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      );
    }

    // For logged in users
    const displayNavItems = !isPublished
      ? navItems.filter((item) => item.title === "Profile")
      : navItems;

    return (
      <nav className="space-y-4 my-4">
        {displayNavItems.map((item) => {
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
        {!isPublished && (
          <Link
            to="/profile"
            className={cn(
              "flex items-center gap-3 rounded-lg p-2 text-sm transition-colors text-yellow-600",
              "hover:bg-secondary/80"
            )}
          >
            <User2 className="h-5 w-5" />
            <span>Complete your profile</span>
          </Link>
        )}
      </nav>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-6 gap-6">
        <div className="flex flex-col items-center my-2">
          <Link to="/home" className="flex flex-col items-center gap-2">
            <School2 className="h-10 w-10 text-primary" />
            <span className="font-semibold text-xl text-primary">
              Mentor Platform
            </span>
          </Link>
        </div>

        <NavContent />

        {/* Only show logout for logged in users */}
        {user && (
          <div className="flex flex-col items-start gap-2 mt-auto">
            <Button onClick={signOut} variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          asChild
          className="flex items-center justify-start m-2 md:hidden"
        >
          <Menu className="h-8 w-8 " />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-6">
          <div className="flex flex-col items-center">
            <Link to="/home">
              <School2 className="h-8 w-8 text-primary" />
            </Link>
          </div>
          <NavContent />
          {user && (
          <div className="flex flex-col items-start gap-2 mt-auto">
            <Button onClick={signOut} variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
