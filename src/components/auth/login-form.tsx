import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { showToast } from "@/lib/toast";
import { ChevronRightCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface LoginFormProps {
  role: "mentor" | "mentee";
  redirectPath?: string;
}

export function LoginForm({ role, redirectPath = "/home" }: LoginFormProps) {
  const { signIn } = useAuth();

  const otherRole = role === "mentor" ? "mentee" : "mentor";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      const response = await signIn(data.email, data.password, role);
      showToast("Successfully logged in!", "success");
      return response;
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>
            {role === "mentor" ? "Mentor Login" : "Mentee Login"}
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your {role} account
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
                        placeholder="name@example.com"
                        type="email"
                        autoComplete="email"
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
                      <Input
                        type="password"
                        autoComplete="current-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-muted-foreground text-sm flex flex-col justify-center gap-4">
          <Link to={`/signup/${role}`} className="text-primary">
            <span className="text-muted-foreground">
              Don't have an account yet?{" "}
            </span>
            Register
          </Link>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-6 items-center">
        <Link to={`/login/${otherRole}`} className="">
          <Button variant="secondary">
            Login as <span className="capitalize">{otherRole}</span>
            <ChevronRightCircle size={24} />
          </Button>
        </Link>

        <Link
          to={"/home"}
          className="hover:underline underline-offset-4 text-muted-foreground flex items-center gap-2"
        >
          Continue without signing in
        </Link>
      </div>
    </div>
  );
}
