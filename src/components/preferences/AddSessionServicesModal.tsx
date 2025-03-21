import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { showToast } from "@/lib/toast";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  createMentorServices,
  updateMentorServices,
} from "@/graphql/mutations";
import { Checkbox } from "../ui/checkbox";
import { DialogLoader } from "../common/DialogLoader";
import { MentorServices } from "@/API";

interface AddSessionServicesModalProps {
  existingService?: MentorServices;
  children: React.ReactNode;
  onConfirm: () => void;
}

const AddSessionServicesModal = ({
  existingService,
  children,
  onConfirm,
}: AddSessionServicesModalProps) => {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { user } = useAuth();

  const formSchema = z.object({
    title: z.string().min(2, "Title must be atlease 2 characters").max(50),
    description: z
      .string()
      .min(10, "Description must be atleast 10 characters")
      .max(500),
    isPaid: z.boolean().default(false),
    cost: z.number().min(0).optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: existingService?.title || "",
      description: existingService?.description || "",
      isPaid: existingService?.isPaid || false,
      cost: Number(existingService?.cost) || 0,
    },
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      setLoading(true);

      if (existingService) {
        //
        const { data } = await client.graphql({
          query: updateMentorServices,
          variables: {
            input: {
              id: existingService.id,
              title: formData.title,
              description: formData.description,
              isPaid: formData.isPaid,
              cost: String(formData.cost),
            },
          },
        });
        if (data?.updateMentorServices) {
          console.log(data.updateMentorServices);
          showToast("Session service updated successfully", "success");
          setOpen(false);
          form.reset();
        }

        return;
      }

      const { data } = await client.graphql({
        query: createMentorServices,
        variables: {
          input: {
            mentorID: user?.mentorId,
            title: formData.title,
            description: formData.description,
            isPaid: formData.isPaid,
            cost: String(formData.cost),
          },
        },
      });
      if (data?.createMentorServices) {
        console.log(data.createMentorServices);
        showToast("Session service added successfully", "success");
        setOpen(false);
        form.reset();
        return;
      }
    } catch (error) {
      console.error("Error adding session service", error);
      showToast("Error adding session service", "error");
    } finally {
      setLoading(false);
      onConfirm();
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchSessionServices();
  // }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {loading ? (
          <DialogLoader />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <DialogHeader>
                <DialogTitle>
                  {existingService ? "Edit" : "Add"} Session Service
                </DialogTitle>
                <DialogDescription>
                  {existingService
                    ? "Update your session service details"
                    : "Add a new session service"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter service title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter service description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isPaid"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>This is a paid session</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("isPaid") && (
                  <FormField
                    control={form.control}
                    name="cost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cost</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            placeholder="Enter service cost"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
              <DialogFooter className="">
                <Button type="submit" className="w-full">
                  Add
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddSessionServicesModal;
