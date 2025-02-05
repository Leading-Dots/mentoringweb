import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Assuming you have an auth hook
import { ProfileStatus } from "@/API";
import Navbar from "./Navbar";
import DashboardHeader from "./DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth(); // Replace with your actual auth check logic

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  //   if (user.profileStatus !== ProfileStatus.PUBLISHED) {
  //     return <Navigate to="/profile" replace />;
  //   }

  return (
    <div className="flex min-h-screen flex-col md:flex-row flex-1 max-w-7xl mx-auto">
      <Navbar />

      <main className="flex-1 ">
        <DashboardHeader />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
