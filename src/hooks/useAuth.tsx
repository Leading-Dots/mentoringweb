import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

import {
  handleSignIn,
  handleSignOut,
  handleConfirmSignUp,
  handleSignUp,
  handleForgotPassword,
} from "@/lib/auth";

import { User } from "@/API";
import { useLocalStorage } from "./useLocalStorage";
import client from "@/lib/apiClient";
import { createUser } from "@/graphql/mutations";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  confirmSignUp: (email: string, code: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<any | null>("user", null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      const { isSignedIn, nextStep } = await handleSignIn({
        username: email,
        password,
      });

      
      console.log("nextStep", nextStep);
      console.log("isSignedIn", isSignedIn);
      return isSignedIn;
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { isSignUpComplete, userId } = await handleSignUp({
        username: email,
        password,
        email,
      });
      return { isSignUpComplete, userId };
    } catch (error) {
      throw error;
    }
  };

  const confirmSignUp = async (email: string, code: string) => {
    try {
      const result = await handleConfirmSignUp(email, code);
      
      
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await handleSignOut();
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
