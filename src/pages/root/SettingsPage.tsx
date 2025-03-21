import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  UserCircle,
  KeyRound,
  SwitchCamera,
  Sun,
  Moon,
  ChevronRight,
  Settings2,
} from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UpdatePasswordModal } from "@/components/modal/UpdatePasswordModal";

const SettingsPage = () => {
  const { setTheme, theme } = useTheme();
  const { switchUserRole, user } = useAuth(); // Assuming userRole is available from useAuth
  const userRole = user?.role;
  const router = useNavigate();

  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] =
    useState(false);
  const settingsOptions = [
    {
      title: "Edit Profile",
      description: "Update your photo and personal details",
      icon: <UserCircle className="h-5 w-5" />,
      onClick: () => router("/profile"),
    },
    {
      title: "Change Password",
      description: "Update your password and security settings",
      icon: <KeyRound className="h-5 w-5" />,
      onClick: () => setIsUpdatePasswordModalOpen(true),
    },
    {
      title: "Switch Roles",
      description: "Change your current role and permissions",
      icon: <SwitchCamera className="h-5 w-5" />,
      value: userRole,
      onClick: () => switchUserRole(),
    },
    {
      title: "Toggle Theme",
      description: "Toggle between light and dark mode",
      icon:
        theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        ),
      value: theme === "dark" ? "Dark" : "Light",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  return (
    <div className="container py-8 max-w-3xl">
      <UpdatePasswordModal
        isOpen={isUpdatePasswordModalOpen}
        onClose={() => setIsUpdatePasswordModalOpen(false)}
      />
      <div className="space-y-4">
      {user?.role === "mentor" && (
          <Card
            className="hover:bg-accent cursor-pointer"
            onClick={() => router("/preferences")} 
          >
            <CardHeader className="flex flex-row items-center space-y-0 p-4">
              <div className="flex items-center flex-1">
                <Settings2 className="h-5 w-5" />

                <div className="ml-4">
                  <CardTitle className="text-lg">Session Preferences</CardTitle>
                  <CardDescription>
                    Update your session preferences
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
          </Card>
        )}

        {settingsOptions.map((option, index) => (
          <Card
            key={index}
            className="hover:bg-accent cursor-pointer"
            onClick={option.onClick}
          >
            <CardHeader className="flex flex-row items-center space-y-0 p-4">
              <div className="flex items-center flex-1">
                {option.icon}
                <div className="ml-4">
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {option.value && (
                  <span className="text-sm text-muted-foreground capitalize">
                    {option.value}
                  </span>
                )}
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
          </Card>
        ))}

       
      </div>
    </div>
  );
};

export default SettingsPage;
