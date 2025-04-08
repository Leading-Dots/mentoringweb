import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { AdminAuthProvider, useAdminAuth } from "@/hooks/useAdminAuth";
import { useAuth } from "@/hooks/useAuth";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useNavigate();
  const { admin } = useAdminAuth();
  const { user } = useAuth();

  // if (user) {
  //   return <Navigate to="/home" replace />;
  // }
  // if (!admin) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return (
    <div className="flex min-h-screen flex-col md:flex-row flex-1 max-w-7xl mx-auto">
      <AdminNavbar />

      <main className="flex-1">
        <h3> Admin Dashboard</h3>
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
