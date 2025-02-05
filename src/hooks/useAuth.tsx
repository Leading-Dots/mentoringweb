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
import { Loader } from "@/components/common/Loader";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string, role: UserRole) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  confirmSignUp: (
    email: string,
    code: string,
    role: UserRole,
    userId: string
  ) => Promise<any>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<any | null>("user", null);
  const [loading, setLoading] = useState(false);

  console.log("user", user);

  const signIn = async (email: string, password: string, role: UserRole) => {
    try {
      setLoading(true);
      const { isSignedIn } = await handleSignIn({
        username: email,
        password,
      });

      if (isSignedIn) {
        const userId = (await getCurrentUser())!.userId;
        console.log("userId", userId);
        const existingUser = await getUser(userId, role);
        if (!existingUser) {
          //TODO: Maybe we create a new user here if not found
          await signOut();
          throw new Error("User not found");
        }
        //Normal flow
        setUser({ ...existingUser, role });
      }
      return isSignedIn;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { isSignUpComplete, userId, nextStep } = await handleSignUp({
        username: email,
        password,
        email,
      });
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

  const refreshUser = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();
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
  const switchUserRole = async (role: UserRole) => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();
      if (currentUser) {
        const existingUser = await getUser(currentUser.userId, role);
        if (!existingUser) {
          await signOut();
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
