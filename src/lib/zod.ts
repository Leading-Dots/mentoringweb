import * as z from "zod";

export const MentorProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  profilePictureUrl: z.string().url("Unable to upload image").optional(),

  // Step 2
  expertise: z.array(z.string()).min(1, "Select at least one expertise"),
  yearsOfExperience: z.number().min(0).max(50),
  hourlyRate: z.number().min(0),


  // Step 3
  websiteUrl: z.union([z.string().url("Invalid website url"), z.string().length(0)]).optional(),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  linkedinUrl: z.union([z.string().url("Invalid linkedin url"), z.string().length(0)]).optional(),
});

export const MenteeProfileFormSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  profilePictureUrl: z.string().url("Unable to upload image").optional(),

  //Step 2

  goals: z.array(z.string()).min(1, "Select at least one expertise"),
  topics: z.array(z.string()).min(1, "Select at least one topic"),
  preferredMentorExperience: z
    .number()
    .min(0, "Preferred mentor experience must be at least 0"),

  //Step 3
  resumeUrl: z.string().url("Please upload valid resume").optional(),
  websiteUrl: z.union([z.string().url("Invalid website url"), z.string().length(0)]).optional(),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  linkedinUrl: z.union([z.string().url("Invalid linkedin url"), z.string().length(0)]).optional(),
});

const getZodSchema = (role: "mentor" | "mentee") => {
  if (role === "mentor") {
    return MentorProfileFormSchema;
  } else {
    return MenteeProfileFormSchema;
  }
};
const getInitialValues = (role: "mentor" | "mentee") => {
  if (role === "mentor") {
    return {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      profilePictureUrl: "",
      expertise: [],
      yearsOfExperience: 0,
      hourlyRate: 0,
      websiteUrl: "",
      summary: "",
      linkedinUrl: "",

    };
  } else {
    return {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      profilePictureUrl: "",
      goals: [],
      preferredMentorExperience: 0,
      topics: [],
      resumeUrl: "",
      linkedinUrl: "",
      websiteUrl: "",
      summary: "",
    };
  }
};

export type MentorProfileFormValues = z.infer<typeof MentorProfileFormSchema>;
export type MenteeProfileFormValues = z.infer<typeof MenteeProfileFormSchema>;

export const getProfileFormSchema = (role: "mentor" | "mentee") => {
  return {
    schema: getZodSchema(role),
    initialValues: getInitialValues(role),
  };
};
