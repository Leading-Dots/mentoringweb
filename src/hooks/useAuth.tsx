import { createContext, useContext, useState, ReactNode, useMemo } from "react";

import {
  handleSignIn,
  handleSignOut,
  handleConfirmSignUp,
  handleSignUp,
  handleForgotPassword,
  getCurrentAuthUser,
  handleUpdatePassowrd,
} from "@/lib/auth";

import { useLocalStorage } from "./useLocalStorage";

import { createUser, getUser } from "@/lib/dbActions";
import { UserRole } from "types";
import { getCurrentUser } from "aws-amplify/auth";
import { Loader } from "@/components/common/Loader";
import { showToast } from "@/lib/toast";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string, role: UserRole) => Promise<any>;
  signUp: (email: string, password: string, role: UserRole) => Promise<any>;
  confirmSignUp: (
    email: string,
    code: string,
    role: UserRole,
    userId: string
  ) => Promise<any>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  refreshUser: () => Promise<void>;
  switchUserRole: () => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<any | null>("user", null);
  const [loading, setLoading] = useState(false);

  console.log("user", user);

  const signIn = async (email: string, password: string, role: UserRole) => {
    try {
      setLoading(true);
      const { isSignedIn } = await handleSignIn({ username: email, password });
      if (!isSignedIn) return false;

      const currentUser = await getCurrentUser();
      if (!currentUser?.userId) {
        throw new Error("Failed to get current user");
      }

      const userId = currentUser.userId;
      const existingUser = await getUser(userId, role);

      if (!existingUser) {
        const newUser = await createUser(role, email, userId);
        if (!newUser) {
          await signOut();
          throw new Error("Failed to create new user");
        }
        setUser({ ...newUser, role });
        return true;
      }

      setUser({ ...existingUser, role });
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Sign in failed";
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, role: UserRole) => {
    try {
      setLoading(true);
      const { isSignUpComplete, userId, nextStep, existingUnconfirmedUser } = await handleSignUp({
        username: email,
        password,
        email,
        role,
      });

      if(existingUnconfirmedUser) {
        return { isSignUpComplete, userId, nextStep, existingUnconfirmedUser };
      }

      console.log("isSignUpComplete", isSignUpComplete, userId, nextStep);
      return { isSignUpComplete, userId, nextStep };
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const confirmSignUp = async (
    email: string,
    code: string,
    role: UserRole,
    userId: string
  ) => {
    try {
      setLoading(true);
      const { isSignUpComplete } = await handleConfirmSignUp(email, code);

      if (isSignUpComplete) {
        const newUser = await createUser(role, email, userId);
        if (!newUser) {
          await signOut();
          throw new Error("User not created");
        }
        console.log("newUser", newUser);
        setUser({ ...newUser, role });
      }

      return isSignUpComplete;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await handleSignOut();
      setUser(null);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await handleForgotPassword(email);
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      await handleUpdatePassowrd(user.email, oldPassword, newPassword);
    } catch (error) {
      throw error;
    }
  };

  const refreshUser = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentAuthUser();
      if (currentUser) {
        const existingUser = await getUser(currentUser.userId, user.role);
        if (!existingUser) {
          await signOut();
          throw new Error("User not found");
        }
        setUser({ ...existingUser, role: user.role });
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Todo: This is not working and will be used for switching roles for the same user in the future
  const switchUserRole = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();
      const role = user.role === "mentor" ? "mentee" : "mentor";
      if (currentUser) {
        const existingUser = await getUser(currentUser.userId, role);
        if (!existingUser) {
          showToast("User not found", "error");
          throw new Error("User not found");
        }
        setUser({ ...existingUser, role });
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signUp,
      confirmSignUp,
      signOut,
      forgotPassword,
      refreshUser,
      switchUserRole,
      changePassword,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
