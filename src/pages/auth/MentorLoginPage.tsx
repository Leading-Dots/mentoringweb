import { LoginForm } from "@/components/auth/login-form";

export default function MentorLoginPage() {
  return <LoginForm role="mentor" redirectPath="/home" />;
}