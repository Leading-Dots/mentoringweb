"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function ConfirmSignUpPage() {
  const location = useLocation();
  const router = useNavigate();

  const { confirmSignUp } = useAuth();

  if (!location.state) {
    router("/signup", { replace: true });
  }

  const { email, role } = location.state;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      const formData = new FormData(event.currentTarget);
      const code = formData.get("code") as string;

      console.log(code);

      const { isSignUpComplete } = await confirmSignUp(email, code, role);

      console.log("Signed in successfully", isSignUpComplete);

      return isSignUpComplete;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Confirm Sign Up</CardTitle>
          <CardDescription>
            Please enter the verification code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Input
                name="code"
                type="text"
                placeholder="Enter verification code"
                autoComplete="off"
              />
            </div>
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
