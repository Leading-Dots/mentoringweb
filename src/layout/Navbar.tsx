import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  GaugeCircle,
  HomeIcon,
  LogOut,
  Menu,
  MessagesSquare,
  School2,
  User2,
  UserCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

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

  const mentorNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon className="h-5 w-5"  />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <User2 className="h-5 w-5"/>,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: <GaugeCircle className="h-5 w-5"/>,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: <MessagesSquare className="h-5 w-5"/>,
    },
  ];

  const menteeNavItems: NavItem[] = [
    {
      title: "Home",
      url: "/home",
      icon: <HomeIcon  className="h-5 w-5"/>,
    },
    {
      title: "Search Mentors",
      url: "/search-mentors",
      icon: <UserCircle2 className="h-5 w-5" />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <User2  className="h-5 w-5"/>,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: <GaugeCircle className="h-5 w-5"/>,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: <MessagesSquare className="h-5 w-5" />,
    },
  ];

  const navItems = user?.role === "mentor" ? mentorNavItems : menteeNavItems;

  const NavContent = () => (
    <nav className="space-y-4 my-4">
      {navItems.map((item) => {
        const isActive = location.pathname === item.url;

        return (
          <Link
            onClick={() => setOpen(false)}
            key={item.title}
            to={item.url}
            className={cn(
              "flex items-center  gap-3 rounded-lg p-2 text-sm transition-colors",
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

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-6">
        <div className="flex flex-col items-center">
          <Link to="/home">
            <School2 className="h-8 w-8 text-primary" />
          </Link>
        </div>

        <NavContent />

        {/* add logout button at the bottom */}

        <div className="flex flex-col items-start gap-2 mt-auto">
          <Button
            onClick={signOut}
           variant="ghost" size="sm">
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
          <Menu className="h-8 w-8 " />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-6">
          <div className="flex flex-col items-center">
            <Link to="/home">
              <School2 className="h-8 w-8 text-primary" />
            </Link>
          </div>
          <NavContent />
          <div>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
