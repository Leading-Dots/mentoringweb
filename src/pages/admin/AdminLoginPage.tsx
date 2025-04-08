import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { showToast } from "@/lib/toast";

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
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function AdminLoginPage() {
  const { signIn } = useAdminAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      const response = await signIn(data.email, data.password);
      showToast("Successfully logged in as admin!", "success");
      return response;
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Enter your admin credentials to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="admin@example.com"
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
              <Link to="/" className="text-primary">
                <span className="text-muted-foreground">Back to main login</span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
