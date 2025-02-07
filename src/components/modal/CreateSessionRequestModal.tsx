import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { SessionRequestForm } from "@/components/session/SessionRequestForm";
import { useState } from "react";

export function CreateSessionRequestModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const userRole = user?.role;

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Implement your submission logic here
      console.log("Form data:", data);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-full">
        <DialogHeader>
          <DialogTitle>Request a Session</DialogTitle>
          <DialogDescription>
            Fill in the details to request a new mentoring session.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <SessionRequestForm 
            onSubmit={handleSubmit} 
            isMentor={userRole === 'mentor'} 
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" form="session-request-form">
            Create Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}