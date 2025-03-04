import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { DateTimePicker } from "../common/DatePicker";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

const formSchema = (isMentor: boolean) =>
  z.object({
    title: z.string().min(1, "Title is required"),

    proposedCost: z.string().min(1, "Proposed cost is required"),
    note: z
      .string()
      .min(10, "Please provide a note with at least 10 characters"),
    duration: z
      .number()
      .int("Duration must be a whole number")
      .min(1, "Duration must be at least 1 month"),

    proposedSessionTime: z.date({
      required_error: "Please select a date and time",
    }),
  });

type FormSchema = z.infer<ReturnType<typeof formSchema>>;

export function SessionRequestForm({
  onSubmit,
  isMentor,
}: {
  onSubmit: (data: FormSchema) => void;
  isMentor: boolean;
}) {
  const [isFree, setIsFree] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema(isMentor)),
    defaultValues: {
      title: "",
      proposedCost: "",
      note: "",
      duration: 1,
      proposedSessionTime: new Date(),
    },
  });

  const handleSubmit = (data: FormSchema) => {
    // Transform the data to match the schema
    const transformedData = {
      ...data,
      [isMentor ? "mentorNote" : "menteeNote"]: data.note,
    };
    onSubmit(transformedData);
  };
  useEffect(() => {
    if (isFree) {
      form.setValue("proposedCost", "0");
    }
  }, [isFree, form]);


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4"
        id="session-request-form"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2">
          <Switch
            className="data-[state=checked]:bg-green-500"
            checked={isFree}
            onCheckedChange={setIsFree}
          />
          <span className="text-sm font-medium">Free Session</span>
        </div>

        {!isFree && (
          <FormField
            control={form.control}
            name="proposedCost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposed Cost ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (Months)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="60"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="proposedSessionTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Session Date & Time</FormLabel>
              <DateTimePicker date={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{isMentor ? "Mentor Note" : "Mentee Note"}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    isMentor
                      ? "Write a note about the session details..."
                      : "Write a note about what you'd like to discuss..."
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
