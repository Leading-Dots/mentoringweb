import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getCurrentUser } from "aws-amplify/auth";
import DashboardLoader from "@/components/common/DashboardLoader";

import {
  handleSignIn,
  handleSignOut,
  getCurrentAuthUser,
  handleUpdatePassowrd,
} from "@/lib/auth";

type AdminAuthContextType = {
  admin: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useLocalStorage<any | null>("admin", null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { isSignedIn } = await handleSignIn({ username: email, password });
      if (!isSignedIn) return false;

      const currentUser = await getCurrentUser();
      if (!currentUser?.userId) {
        throw new Error("Failed to get current user");
      }

      // Set basic admin info
      setAdmin({
        email,
        userId: currentUser.userId,
        role: "admin",
      });

      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign in failed";
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await handleSignOut();
      window.location.href = "/admin/login";
      setAdmin(null);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      await handleUpdatePassowrd(admin.email, oldPassword, newPassword);
    } catch (error) {
      throw error;
    }
  };

  const value = useMemo(
    () => ({
      admin,
      loading,
      signIn,
      signOut,
      changePassword,
    }),
    [admin]
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {loading ? <DashboardLoader /> : children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
