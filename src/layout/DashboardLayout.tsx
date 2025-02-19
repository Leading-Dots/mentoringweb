import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Assuming you have an auth hook
import Navbar from "./Navbar";
import DashboardHeader from "./DashboardHeader";
import { ProfileStatus } from "@/API";

interface DashboardLayoutProps {
  children: React.ReactNode;
  isProtected?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isProtected = true,
}) => {
  const { user } = useAuth(); // Replace with your actual auth check logic
  const router = useNavigate();

  if (isProtected && !user) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    if (isProtected) {
      if (user && user!.profileStatus === ProfileStatus.PUBLISHED) {
        router("/profile");
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col md:flex-row flex-1 max-w-7xl mx-auto">
      <Navbar />

      <main className="flex-1">
        <DashboardHeader />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
