import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { UserRole } from "types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { showToast } from "@/lib/toast";

const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  role: "mentor" | "mentee";
}

export function SignUpForm({ role }: SignUpFormProps) {
  const { signUp } = useAuth();
  const router = useNavigate();

  const otherRole = role === "mentor" ? "mentee" : "mentor";

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: SignUpValues) {
    try {
      const response = await signUp(
        values.email,
        values.password,
        role as UserRole
      );

      if (
        !response.isSignUpComplete &&
        response.nextStep.signUpStep === "CONFIRM_SIGN_UP"
      ) {
        router("/confirm-signup", {
          state: {
            email: values.email,
            role: role,
            userId: response!.userId,
          },
        });
      }
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-6 min-h-screen p-4 justify-center">
      <Card className="">
        <CardHeader>
          <CardTitle>Create a {role} account</CardTitle>
          <CardDescription>
            Enter your details to create your {role} account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting
                  ? "Creating account..."
                  : "Create account"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to={`/login/${role}`}
              className="hover:underline underline-offset-4 text-primary"
            >
              Login
            </Link>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <Link to={`/signup/${otherRole}`} className="">
              <Button variant="secondary">
                <span>
                  Sign up as <span className="capitalize">{otherRole}</span>
                </span>
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
