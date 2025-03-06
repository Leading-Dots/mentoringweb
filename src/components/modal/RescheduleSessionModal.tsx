import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { DateTimePicker } from "../common/DatePicker";
import client from "@/lib/apiClient";
import { updateSession } from "@/graphql/mutations";
import { DialogLoader } from "../common/DialogLoader";
import { Status } from "@/API";
import { showToast } from "@/lib/toast";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { sendNotification } from "@/lib/firebase/messaging";
import { useAuth } from "@/hooks/useAuth";

interface RescheduleSessionModalProps {
  children: React.ReactNode;
  currentSessionDate: string;
  sessionId: string;
  onConfirm: () => void;
}

const RescheduleSessionModal = ({
  children,
  currentSessionDate,
  onConfirm,
  sessionId,
}: RescheduleSessionModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const otherRole = user.role === "mentor" ? "mentee" : "mentor";

  const formSchema = z.object({
    reason: z.string().min(10, "Reason must be at least 10 characters"),
    date: z
      .date()
      .min(new Date(), "Date cannot be in the past")
      .refine(
        (date) => date.getTime() !== new Date(currentSessionDate).getTime(),
        {
          message: "New date must be different from current session date",
        }
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
      date: new Date(),
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: updateSession,
        variables: {
          input: {
            id: sessionId,
            sessionDate: values.date.toISOString(),
            status: Status.RESCHEDULED,
          },
        },
      });

      if (data) {
        console.log(data);
        sendNotification({
          title: "Session Rescheduled",
          body: "Your session has been rescheduled. Please check the new date.",
          recipientId: user?.role === "mentor" ? data.updateSession?.menteeID : data.updateSession?.mentorID,
          recipientRole: otherRole,
        });
        showToast("Session rescheduled successfully", "success");
        onConfirm();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="flex-1">{children}</DrawerTrigger>
        <DrawerContent>
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="p-4">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">
                  Reschedule Session
                </DrawerTitle>
                <DrawerDescription>
                  Provide a reason and select a new date for the session.
                </DrawerDescription>
              </DrawerHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-7"
                >
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Rescheduling</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Please provide a reason..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Session Date</FormLabel>
                        <FormControl>
                          <DateTimePicker
                            date={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DrawerFooter>
                    <Button className="w-full" type="submit">
                      Reschedule
                    </Button>
                  </DrawerFooter>
                </form>
              </Form>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex-1">{children}</DialogTrigger>
      <DialogContent className="">
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Reschedule Session</DialogTitle>
              <DialogDescription>
                Provide a reason and select a new date for the session.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7"
              >
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Rescheduling</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Please provide a reason..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Session Date</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          date={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button className="w-full" type="submit">
                    Reschedule
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleSessionModal;
