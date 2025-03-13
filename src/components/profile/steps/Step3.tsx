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
import { useState } from "react";
import { uploadProfileImage, uploadResume } from "@/lib/storage";
import { showToast } from "@/lib/toast";
import { Link } from "react-router-dom";
import { validateFileForPdf } from "@/lib/utils";

interface StepThreeProps {
  role: "mentor" | "mentee";
}

const StepThree = ({ role }: StepThreeProps) => {
  const form = useFormContext();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setLoading(true);
    try {
      const file = e.target.files[0];    
    
      const url = await uploadResume(file, user.id);
      if (!url) {
        showToast("Error uploading file", "error");
        return;
      }
      console.log("Resume URL in StepThree Component", url);
      form.setValue("resumeUrl", url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="summary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Summary *</FormLabel>
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
              <FormDescription>Upload your resume (PDF format) *</FormDescription>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type="file"
                    accept="application/pdf"
                    disabled={loading}
                    onChange={(e) => {
                      if(!validateFileForPdf(e)) {
                        //reset the input field
                        e.target.value = "";
                        return;
                      }
                      handleFileUpload(e);
                      onChange(e);
                    }}
                  />
                  {loading && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
              {form.getValues("resumeUrl") && (
                <Link
                  target="_blank"
                  to={form.getValues("resumeUrl")}
                  className="text-primary underline mt-3"
                >
                  View uploaded resume
                </Link>
              )}
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default StepThree;
