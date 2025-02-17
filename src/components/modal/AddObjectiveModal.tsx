import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TagInput } from "../common/TagInput";
import { updateSession } from "@/graphql/mutations";
import client from "@/lib/apiClient";
import { Session } from "@/API";

interface AddObjectiveModalProps {
  children?: React.ReactNode;
  onConfirm: () => void;
  session: Session;
}

export function AddObjectiveModal({
  onConfirm,
  session,
  children,
}: AddObjectiveModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [objectives, setObjectives] = React.useState<string[]>(
    session!.objectives?.filter((obj): obj is string => obj !== null) ?? []
  );

  const handleAddObjectives = async (objectives: string[]) => {
    try {
      const { data } = await client.graphql({
        query: updateSession,
        variables: {
          input: {
            id: session.id,
            objectives: objectives,
          },
        },
      });

      if (data) {
        onConfirm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (objectives.length > 0) {
      await handleAddObjectives(objectives);
      setObjectives([]); // Reset form
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add New Objectives</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="objectives">Objectives</Label>
            <TagInput
              value={objectives.map((text, index) => ({
                id: index.toString(),
                text,
              }))}
              onChange={(value) => {
                setObjectives(value.map((obj) => obj.text));
              }}
              placeholder="Type objective and press enter..."
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add Objectives</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
