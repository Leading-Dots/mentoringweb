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
import { useAuth } from "@/hooks/useAuth";

interface StepThreeProps {
  role: "mentor" | "mentee";
}

const StepThree = ({ role }: StepThreeProps) => {
  const form = useFormContext();
  const {user} = useAuth();

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="summary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Summary</FormLabel>
            <FormDescription>
              {role === "mentor"
                ? "Tell us about your professional experience"
                : "Tell us about yourself"}
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
              <FormDescription>Upload your resume (PDF format)</FormDescription>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept=".pdf"
                  onChange={ async (e) => {
                    const file = e.target.files?.[0];


                    if (!file) return;


                    const url =  URL.createObjectURL(file);
                    
                    onChange(url);

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
