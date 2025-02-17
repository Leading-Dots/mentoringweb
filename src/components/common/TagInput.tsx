import * as React from "react";
import { X } from "lucide-react";
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const newObjective: ObjectiveItemProps = {
        id: Date.now().toString(),
        text: inputValue.trim(),
      };
      onChange([...value, newObjective]);
      setInputValue("");
    }
  };

  const removeObjective = (id: string) => {
    onChange(value.filter((obj) => obj.id !== id));
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-2">
        {value.map((objective) => (
          <div
            key={objective.id}
            className="flex items-center gap-2 group p-2 rounded-md hover:bg-secondary/20"
          >
            <span className="flex-grow">{objective.text}</span>
            <button
              type="button"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeObjective(objective.id)}
            >
              <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="transition-all duration-200"
        />
        {value.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAll}
            className="whitespace-nowrap animate-fadeIn"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
}
