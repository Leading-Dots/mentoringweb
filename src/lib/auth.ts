import {
  signIn,
  signUp,
  confirmSignUp,
  resetPassword,
  signOut,
  getCurrentUser,
  autoSignIn,
  updatePassword,
} from "aws-amplify/auth";
import { UserRole } from "types";

export interface SignUpParams {
  username: string;
  password: string;
  email: string;
  role: UserRole;
}

export interface SignInParams {
  username: string;
  password: string;
}

// Sign up new user
export const handleSignUp = async ({
  username,
  password,
  email,
  role,
}: SignUpParams) => {
  try {
    console.log("sign up", username, password, email, role);
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        autoSignIn: true,
        userAttributes: {
          email,
          // "custom:role": role,
        },
      },
    });
    console.log("isSignUpComplete", isSignUpComplete, userId, nextStep);
    return { isSignUpComplete, userId, nextStep };
  } catch (error: any) {
    // Check if error is due to existing unconfirmed user
    if (error.name === 'UsernameExistsException') {
      // Return a special response indicating user needs confirmation
      return {
        isSignUpComplete: false,
        nextStep: {
          signUpStep: 'CONFIRM_SIGN_UP',
          codeDeliveryDetails: {
            deliveryMedium: 'EMAIL',
            destination: email
          }
        },
        existingUnconfirmedUser: true
      };
    }
    throw error;
  }
  }

// Confirm sign up with code
export const handleConfirmSignUp = async (username: string, code: string) => {
  try {
    const { nextStep, isSignUpComplete, userId } = await confirmSignUp({
      username,
      confirmationCode: code,
    });
    console.log("nextStep", nextStep, isSignUpComplete, userId);

    if (isSignUpComplete) {
      console.log("auto sign in");
      await autoSignIn();
    }
    return { nextStep, isSignUpComplete, userId };
  } catch (error) {
    throw error;
  }
};

// Sign in existing user
export const handleSignIn = async ({ username, password }: SignInParams) => {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
    });
    return { isSignedIn, nextStep };
  } catch (error) {
    throw error;
  }
};

// Send forgot password code
export const handleForgotPassword = async (username: string) => {
  try {
    await resetPassword({ username });
  } catch (error) {
    throw error;
  }
};

// Sign out user
export const handleSignOut = async () => {
  try {
    await signOut();
    // localStorage.clear();
  } catch (error) {
    throw error;
  }
};


export const handleUpdatePassowrd = async (username: string, oldPassword: string, newPassword: string) => {
  try {
    await updatePassword({oldPassword, newPassword});
  } catch (error) {
    throw error;
  }
}

// Get current authenticated user
export const getCurrentAuthUser = async () => {
  try {
    const currentUser = await getCurrentUser();
    return currentUser;
  } catch (error) {
    throw error;
  }
};
