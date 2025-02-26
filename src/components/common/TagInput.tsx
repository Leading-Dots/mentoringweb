import * as React from "react";
import { X, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ObjectiveItemProps {
  id: string;
  text: string;
}

interface ObjectiveListProps {
  value: ObjectiveItemProps[];
  onChange: (value: ObjectiveItemProps[]) => void;
  placeholder?: string;
}

export function TagInput({
  value = [],
  onChange,
  placeholder = "Add new objective...",
}: ObjectiveListProps) {
  const [inputValue, setInputValue] = React.useState("");

  const addObjective = () => {
    if (inputValue.trim()) {
      const newObjective: ObjectiveItemProps = {
        id: Date.now().toString(),
        text: inputValue.trim(),
      };
      onChange([...value, newObjective]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addObjective();
    }
  };

  const removeObjective = (id: string) => {
    onChange(value.filter((obj) => obj.id !== id));
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="flex flex-col gap-3 space-y-5">
      <div className="flex flex-wrap gap-2">
        {value.map((objective) => (
          <Badge
            key={objective.id}
            variant="secondary"
            className="px-3 py-1.5 text-sm flex items-center gap-2 group"
          >
            {objective.text}
            <button
              type="button"
              onClick={() => removeObjective(objective.id)}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 flex gap-2">
          <Input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="transition-all duration-200"
          />
          <Button
            size="icon"
            variant="outline"
            onClick={addObjective}
            disabled={!inputValue.trim()}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {value.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="whitespace-nowrap animate-fadeIn text-red-500"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
}
