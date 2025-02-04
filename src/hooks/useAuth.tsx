import { createContext, useContext, useState, ReactNode, useMemo } from "react";

import {
  handleSignIn,
  handleSignOut,
  handleConfirmSignUp,
  handleSignUp,
  handleForgotPassword,
} from "@/lib/auth";

import { useLocalStorage } from "./useLocalStorage";

import { createUser, getUser } from "@/lib/dbActions";
import { UserRole } from "types";
import { getCurrentUser } from "aws-amplify/auth";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string, role: UserRole) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  confirmSignUp: (email: string, code: string, role: UserRole) => Promise<any>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<any | null>("user", null);
  const [loading, setLoading] = useState(false);

  console.log("user", user);

  const signIn = async (email: string, password: string, role: UserRole) => {
    try {
      const { isSignedIn } = await handleSignIn({
        username: email,
        password,
      });

      if (isSignedIn) {
        const userId = (await getCurrentUser())!.userId;
        const existingUser = await getUser(userId, role);
        if (!existingUser) {
          await signOut();
          throw new Error("User not found");
        }
        setUser({ ...existingUser, role });
      }
      return isSignedIn;
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { isSignUpComplete, userId, nextStep } = await handleSignUp({
        username: email,
        password,
        email,
      });
      return { isSignUpComplete, userId, nextStep };
    } catch (error) {
      throw error;
    }
  };

  const confirmSignUp = async (email: string, code: string, role: UserRole) => {
    try {
      const { isSignUpComplete, userId } = await handleConfirmSignUp(
        email,
        code
      );

      if (isSignUpComplete) {
        const newUser = await createUser(role, email, userId as string);
        if (!newUser) {
          await signOut();
          throw new Error("User not created");
        }
        setUser({ ...newUser, role });
      }

      return isSignUpComplete;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await handleSignOut();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await handleForgotPassword(email);
    } catch (error) {
      throw error;
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
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
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
