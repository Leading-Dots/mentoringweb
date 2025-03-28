import { LoginForm } from "@/components/auth/login-form";

export default function MenteeLoginPage() {
  return <LoginForm role="mentee" redirectPath="home" />;
}