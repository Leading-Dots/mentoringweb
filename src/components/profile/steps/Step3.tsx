import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface StepThreeProps {
  role: "mentor" | "mentee";
}

const StepThree = ({ role }: StepThreeProps) => {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="summary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Summary</FormLabel>
            <FormDescription>
              Write a detailed summary about your professional background and
              what you can offer
            </FormDescription>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Enter your professional summary"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="linkedinUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn Profile URL</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="websiteUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Personal Website</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="url"
                placeholder="https://yourwebsite.com" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {role === "mentee" && (
        <FormField
          control={form.control}
          name="resumeFile"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormDescription>
                Upload your resume (PDF format)
              </FormDescription>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default StepThree;
