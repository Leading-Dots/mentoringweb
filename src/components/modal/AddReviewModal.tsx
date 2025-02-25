import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogLoader } from "../common/DialogLoader";
import { showToast } from "@/lib/toast";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import client from "@/lib/apiClient";
import { Session } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { createReview } from "@/graphql/mutations";

interface AddReviewModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  session: Session;
  onConfirm: () => Promise<void>;
}

const formSchema = z.object({
  content: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.number().min(1, "Please select a rating").max(5),
});

const AddReviewModal = ({
  onConfirm,
  session,
  open,
  setOpen,
}: AddReviewModalProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      rating: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await client.graphql({
        query: createReview,
        variables: {
          input: {
            comment: values.content,
            rating: String(values.rating),
            sessionID: session.id,
            reviewerRole: user?.role,
            reviewerID: user?.role === "mentee" ? user.menteeId : user.mentorId,
            reviewedID:
              user?.role === "mentee" ? session.mentorID : session.menteeID,
          },
        },
      });

      if (response.errors) {
        throw response.errors;
      }

      await onConfirm();
      showToast("Review submitted successfully", "success");
      setOpen(false);
    } catch (error) {
      console.error(error);
      showToast("Failed to submit review", "error");
    } finally {
      setLoading(false);
    }
  };

  const StarRating = ({ field }: { field: any }) => {
    return (
      <div className="flex gap-2 items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-12 w-12 cursor-pointer transition-all hover:scale-110", // increased size from h-6 w-6 to h-12 w-12
              star <= field.value
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            )}
            onClick={() => field.onChange(star)}
          />
        ))}
      </div>
    );
  };
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen} defaultOpen>
        <DrawerContent>
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="p-4">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">Add Review</DrawerTitle>
                <DrawerDescription>
                  Share your experience and rate the session
                </DrawerDescription>
              </DrawerHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-7"
                >
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating</FormLabel>
                        <FormControl>
                          <StarRating field={field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Review Content</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Share your thoughts about the session..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DrawerFooter>
                    <Button className="w-full" type="submit">
                      Submit Review
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
      <DialogContent>
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Add Review</DialogTitle>
              <DialogDescription>
                Share your experience and rate the session
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7"
              >
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <FormControl>
                        <StarRating field={field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Review Content</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Share your thoughts about the session..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button className="w-full" type="submit">
                    Submit Review
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

export default AddReviewModal;
