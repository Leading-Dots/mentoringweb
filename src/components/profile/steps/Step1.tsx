import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { ImageUpload } from "@/components/common/ImageUpload";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ProfileStatus } from "@/API";

export function StepOne() {
  const form = useFormContext();
  const { user } = useAuth();
  const router = useNavigate();
  const [preview, setPreview] = useState<string>("");

  const handlePublicProfile = (e : React.MouseEvent) => {
    e.preventDefault();
    console.log("Public Profile");
    const role = user?.role;
    if (role === "mentor") {
      console.log("Mentor Public Profile");
      router(`/mentor/${user?.mentorId}`);
    } else {
      console.log("Mentee Public Profile");
      router(`/mentee/${user?.menteeId}`);
    }
  };


  const StatusBadge = () => {
    const status = user?.profileStatus;
    console.log("Status", status);
    if (!status) return null;
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-gray-800 bg-gray-200 px-2 py-1 rounded-full">
          {status}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Profile Picture Section */}
      <div className="flex justify-center items-center space-y-2 gap-4">
        <FormField
          control={form.control}
          name="profilePictureUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={(url) => {
                    console.log("Image URL", url);
                    field.onChange(url);
                    setPreview(url);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-center items-center space-y-2 gap-4">
          <StatusBadge  />
          {
            user?.profileStatus === ProfileStatus.PUBLISHED && (
              <Button onClick={handlePublicProfile}>View Public Profile</Button>
            )
          }
      
      </div>

      {/* Name Fields Row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
                <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Email Field */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                readOnly
                placeholder="john@example.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Bio Field */}
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us about yourself..."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
