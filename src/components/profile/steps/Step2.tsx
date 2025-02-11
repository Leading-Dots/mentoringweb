import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/common/MultiSelect";

interface StepTwoProps {
  role: "mentor" | "mentee";
}

export function StepTwo({ role }: StepTwoProps) {
  const form = useFormContext();

  const expertiseOptions = [
    { label: "Frontend Development", value: "Frontend Development" },
    { label: "Backend Development", value: "Backend Development" },
    { label: "Full Stack Development", value: "Full Stack Development" },
    { label: "DevOps", value: "DevOps" },
    { label: "UI/UX Design", value: "UI/UX Design" },
  ];

  const goalOptions = [
    { label: "Learn a new technology", value: "Learn a new technology" },
    { label: "Improve my coding skills", value: "Improve my coding skills" },
    { label: "Prepare for interviews", value: "Prepare for interviews" },
    { label: "Build a portfolio", value: "Build a portfolio" },

  ]

  if (role === "mentor") {
    return (
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expertise</FormLabel>
              <MultiSelect
                options={expertiseOptions}
                onValueChange={(value) => field.onChange(value)}
                defaultValue={field.value}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hourlyRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hourly Rate ($)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="goals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Learning Goals</FormLabel>
            <MultiSelect
              options={goalOptions}
              onValueChange={(value) => field.onChange(value)}
              defaultValue={field.value || []}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferredMentorExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Mentor Experience (years)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                onChange={(e) => field.onChange(parseInt(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
