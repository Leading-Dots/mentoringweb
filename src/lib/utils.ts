import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { MenteeProfileFormValues, MentorProfileFormValues } from "@/lib/zod";

type ProfileData = MentorProfileFormValues | MenteeProfileFormValues | null;

export const transformNullValues = (data: any, role: "mentor" | "mentee"): ProfileData => {
  if (!data) return null;

  const baseTransform = {
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    bio: data.bio || "",
  };

  if (role === "mentor") {
    return {
      ...baseTransform,
      expertise: data.expertise || [],
      yearsOfExperience: data.yearsOfExperience || 0,
      hourlyRate: data.hourlyRate || 0,
    } as MentorProfileFormValues;
  }

  return {
    ...baseTransform,
    goals: data.goals || [],
    preferredMentorExperience: data.preferredMentorExperience || 0,
  } as MenteeProfileFormValues;
};

export const getInitials = (firstName?: string | null, lastName?: string | null) => {
  if (!firstName && !lastName) return "U";
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}