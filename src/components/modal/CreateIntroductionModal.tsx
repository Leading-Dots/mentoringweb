import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import { DialogLoader } from "../common/DialogLoader";
import { showToast } from "@/lib/toast";
import client from "@/lib/apiClient";
import {
  createIntroductionSession,
  updateIntroductionRequest,
} from "@/graphql/mutations";
import {
  CreateIntroductionSessionInput,
  IntroductionRequest,
  MentorshipStatus,
} from "@/API";
import { sendNotification } from "@/lib/firebase/messaging";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/components/ui/form";

import {
  DialogPortal,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DateTimePicker } from "../common/DatePicker";
import { useNavigate } from "react-router-dom";
import { addMentorship, getUser } from "@/lib/dbActions";

interface CreateIntroductionSessionModalProps {
  children: React.ReactNode;
  menteeId: string;
  mentorId: string;
  introductionRequest: IntroductionRequest;
  onDone?: () => void;
}

export function CreateIntroductionSessionModal({
  children,
  menteeId,
  mentorId,
  introductionRequest,
  onDone,
}: CreateIntroductionSessionModalProps) {
  const { user } = useAuth();

  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const createIntroductionSessionSchema = z.object({
    duration: z.string().optional(),
    sessionDate: z.date({
      required_error: "Please select a date and time",
    }),
    meetingLink: z.string().url("Please enter a valid URL"),
  });

  const form = useForm<z.infer<typeof createIntroductionSessionSchema>>({
    resolver: zodResolver(createIntroductionSessionSchema),
    defaultValues: {
      duration: "30",
      sessionDate: new Date(),
      meetingLink: "",
    },
  });

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const mentorship = await addMentorship(
        mentorId,
        menteeId,
        MentorshipStatus.INTRODUCTION
      );

      const mentee = await getUser(menteeId, "mentee");
      const menteeName = `${mentee?.firstName} ${mentee?.lastName}`;

      const sessionInput: CreateIntroductionSessionInput = {
        menteeID: menteeId,
        mentorID: mentorId,
        mentorName: `${user?.firstName} ${user?.lastName}`,
        MenteeName: menteeName,
        duration: data.duration || "30", // default 30 minutes
        sessionDate: data.sessionDate,
        meetingLink: data.meetingLink,
        mentorshipID: mentorship.id,
        sessionStatus: MentorshipStatus.INTRODUCTION,
      };

      const response = await client.graphql({
        query: createIntroductionSession,
        variables: {
          input: sessionInput,
        },
      });

      showToast("Introduction Meeting created successfully", "success");

      // Notify the other user
      const recipientId = user?.role === "mentor" ? menteeId : mentorId;
      const recipientRole = user?.role === "mentor" ? "mentee" : "mentor";

      if (response.data) {
        await client.graphql({
          query: updateIntroductionRequest,
          variables: {
            input: {
              id: introductionRequest.id,
              status: MentorshipStatus.ACCEPTED,
            },
          },
        });
      }

      sendNotification({
        title: "New Introduction Meeting",
        body: `${user?.firstName} ${user?.lastName} has created an introduction session`,
        recipientId,
        recipientRole,
      });

      setOpen(false);

      return response;
    } catch (error) {
      console.error("Error creating introduction session:", error);
      showToast("Failed to create introduction session", "error");
    } finally {
      onDone?.();
      setLoading(false);
    }
  };

  const Content = (
    <>
      {loading ? (
        <DialogLoader />
      ) : (
        <>
          <div className="space-y-4">
            <Form {...form}>
              <form
                id="introduction-session-form"
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} defaultValue="30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sessionDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Session Date & Time</FormLabel>
                      <DateTimePicker
                        date={field.value}
                        onChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meetingLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meeting Link</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://meet.google.com/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              form="introduction-session-form"
              className="w-full"
            >
              Create Session
            </Button>
          </div>
        </>
      )}
    </>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Schedule Introduction Session</DrawerTitle>
            <DrawerDescription>
              Set up your first introduction session
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{Content}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Introduction Session</DialogTitle>
          <DialogDescription>
            Set up your first introduction session
          </DialogDescription>
        </DialogHeader>
        {Content}
      </DialogContent>
    </Dialog>
  );
}
