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

const formSchema = (isMentor: boolean) =>
  z.object({
    proposedCost: z.string().min(1, "Proposed cost is required"),
    note: z
      .string()
      .min(10, "Please provide a note with at least 10 characters"),
    duration: z
      .number()
      .min(30, "Duration must be at least 30 minutes")
      .max(180, "Duration cannot exceed 180 minutes"),
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
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema(isMentor)),
    defaultValues: {
      proposedCost: "",
      note: "",
      duration: 60,
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4"
        id="session-request-form"
      >
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

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (minutes)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="60"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Session duration between 30 and 180 minutes
              </FormDescription>
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
