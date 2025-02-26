import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      
      {children}
    </main>
  );
};

export default AuthLayout;
