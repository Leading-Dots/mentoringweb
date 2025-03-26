import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import SessionServiceSelector from "./SessionServiceSelector";
import { MentorServices } from "@/API";
import AddSessionServicesModal from "../preferences/AddSessionServicesModal";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import { showToast } from "@/lib/toast";

const formSchema = (isMentor: boolean) =>
  z.object({
    title: z.string().min(1, "Title is required"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
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
  mentorId,
  isMentor,
}: {
  onSubmit: (data: FormSchema) => void;
  mentorId: string;
  isMentor: boolean;
}) {
  const [isFree, setIsFree] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );

  console.log(isMentor, mentorId);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema(isMentor)),
    defaultValues: {
      title: "notitle",
      description: "nodescription",
      proposedCost: "novalue",
      note: "",
      duration: 1,
      proposedSessionTime: new Date(),
    },
  });

  const handleSubmit = (data: FormSchema) => {
    // Transform the data to match the schema

   
    if (!selectedServiceId ) {
      showToast("Please select a service", "error");
      return
    }
    const transformedData = {
      ...data,
      mentorServiceId: selectedServiceId,
    };
    onSubmit(transformedData);
  };
  useEffect(() => {
    if (isFree) {
      form.setValue("proposedCost", "0");
    }
  }, [isFree, form]);

  const autoFillFormData = (service: MentorServices) => {
    setSelectedServiceId(service.id);
    form.setValue("title", service.title);
    form.setValue("description", service.description);
    form.setValue("proposedCost", service.cost);
    form.setValue("duration", Number(service.duration));
    if (service.isPaid) {
      setIsFree(false);
      form.setValue("proposedCost", service.cost);
    } else {
      setIsFree(true);
    }
  };

  return (
    <Form {...form}>
      <SessionServiceSelector mentorId={mentorId} onSelect={autoFillFormData} />
      {isMentor && (  
        <div className="mb-4">
          <AddSessionServicesModal onConfirm={() => {
            //reload Session Service Selector
            form.reset();
          }}>
            <Button variant="ghost" size="lg">
              <PlusCircleIcon className="h-6 w-6" />
              Add New Service
            </Button>
          </AddSessionServicesModal>
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4"
        id="session-request-form"
      >
        {/* Hidden fields for storing auto-filled data */}
        <input defaultValue={"notitle"}  type="hidden" {...form.register("title")} />
        <input defaultValue={"nodescription"} type="hidden" {...form.register("description")} />
        <input defaultValue={"novalue"} type="hidden" {...form.register("proposedCost")} />
        <input defaultValue={"novalue"} type="hidden" {...form.register("duration")} />

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
              <FormLabel>Send a note</FormLabel>
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
