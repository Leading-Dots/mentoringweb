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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import client from "@/lib/apiClient";
import { updateSession } from "@/graphql/mutations";
import { DialogLoader } from "../common/DialogLoader";
import { showToast } from "@/lib/toast";
import { useAuth } from "@/hooks/useAuth";
import { sendNotification } from "@/lib/firebase/messaging";

interface AddMeetingLinkModalProps {
  children: React.ReactNode;
  sessionId: string;
  onConfirm: () => void;
}

const AddMeetingLinkModal = ({
  children,
  sessionId,
  onConfirm,
}: AddMeetingLinkModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {user} = useAuth();

  const otherRole = user?.role === "mentor" ? "mentee" : "mentor";

  const formSchema = z.object({
    meetingLink: z.string().url("Please enter a valid URL"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      meetingLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: updateSession,
        variables: {
          input: {
            id: sessionId,
            meetingLink: values.meetingLink,
          },
        },
      });

      if (data) {
        console.log(data);
        sendNotification({
          title: "Meeting Link Added",
          body: `A meeting link has been added to the session.`,
          recipientId: user?.role === "mentor" ? data.updateSession.menteeID : data.updateSession.mentorID,
          recipientRole: otherRole,
        })
        showToast("Meeting link added successfully", "success");
        onConfirm();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex-1">{children}</DialogTrigger>
      <DialogContent>
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Add Meeting Link</DialogTitle>
              <DialogDescription>
                Add a meeting link to the session.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-9"
              >
                <FormField
                  control={form.control}
                  name="meetingLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meeting Link</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="https://meet.google.com/..."
                        />
                      </FormControl>
                      <FormDescription>
                        Meeting link can be a Google Meet, Zoom, or any other
                        video conferencing link.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button className="w-full" type="submit">
                    Add Link
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

export default AddMeetingLinkModal;
