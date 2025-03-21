import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import {
  getProfileFormSchema,
  MenteeProfileFormValues,
  MentorProfileFormValues,
} from "@/lib/zod";
import { StepOne } from "./steps/Step1";
import { StepTwo } from "./steps/Step2";
import { UserRole } from "types";
import StepHeader from "./steps/StepHeader";
import { showToast } from "@/lib/toast";
import client from "@/lib/apiClient";
import { updateMentee, updateMentor } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ProfileStatus } from "@/API";
import StepThree from "./steps/Step3";

interface ProfileFormProps {
  role: UserRole;
  initialData?: MentorProfileFormValues | MenteeProfileFormValues | null;
  isProfilePublished: boolean;
}

export function ProfileForm({ role, initialData = null }: ProfileFormProps) {
  const [step, setStep] = useState(0);

  console.log("initialData", initialData);

  const { user, refreshUser } = useAuth();
  const { schema, initialValues } = getProfileFormSchema(role);

  const router = useNavigate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialData || initialValues,
    mode: "onBlur",
  });

  async function onSubmit(
    data: MentorProfileFormValues | MenteeProfileFormValues
  ) {
    try {
      console.log("data", data);

      if (role === "mentor") {
        const mentorData = data as MentorProfileFormValues;
        console.log("mentorData", mentorData);
        const response = await client.graphql({
          query: updateMentor,
          variables: {
            input: {
              id: user.id,
              firstName: mentorData.firstName,
              lastName: mentorData.lastName,
              email: mentorData.email,
              bio: mentorData.bio,
              expertise: mentorData.expertise,
              yearsOfExperience: mentorData.yearsOfExperience,
              hourlyRate: mentorData.hourlyRate,
              profilePictureUrl: mentorData.profilePictureUrl || null,
              profileStatus: user.profileStatus === ProfileStatus.PUBLISHED ? ProfileStatus.PUBLISHED : ProfileStatus.INPROGRESS,
              summary: mentorData.summary,
              websiteUrl: mentorData.websiteUrl || null,
              linkedInUrl: mentorData.linkedinUrl || null,
              availability: mentorData.availability,
            },
          },
        });

        console.log("response", response);
        showToast("Mentor Profile updated successfully", "success");

        refreshUser();
        router("/home");
        return response;
      } else {
        const menteeData = data as MenteeProfileFormValues;
        console.log("menteeData", menteeData);

        const response = await client.graphql({
          query: updateMentee,
          variables: {
            input: {
              id: user.id,
              firstName: menteeData.firstName,
              lastName: menteeData.lastName,
              email: menteeData.email,
              bio: menteeData.bio,
              goals: menteeData.goals,
              profilePictureUrl: menteeData.profilePictureUrl || null,
              preferredMentorExperience: menteeData.preferredMentorExperience,
              profileStatus: ProfileStatus.PUBLISHED,
              summary: menteeData.summary,
              resumeUrl: menteeData.resumeUrl || null,
              websiteUrl: menteeData.websiteUrl || null,
              linkedInUrl: menteeData.linkedinUrl || null,
              topics: menteeData.topics,
            },
          },
        });

        console.log("response", response);
        showToast("Mentee Profile updated successfully", "success");
        refreshUser();
        router("/home");
        return response;
      }
    } catch (error) {
      console.error(error);
      showToast("An error occurred. Please try again later", "error");
    }
  }

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();

    const commonFields = ["firstName", "lastName", "email", "bio"] as const;
    const mentorFields = [
      "expertise",
      "yearsOfExperience",
      "hourlyRate",
    ] as const;
    const menteeFields = [
      "goals",
      "topics",
      "preferredMentorExperience",
    ] as const;
    const summaryFields = ["summary"] as const;

    const stepValidationFields = {
      0: commonFields,
      1: role === "mentor" ? mentorFields : menteeFields,
      2: summaryFields,
    };

    const currentStepFields =
      stepValidationFields[step as keyof typeof stepValidationFields];

    const isValid = await form.trigger(currentStepFields as any);

    if (!isValid) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setStep(step + 1);
  };
  return (
    <Form {...form}>
      <StepHeader step={step} />
      {/* {
        form.formState.errors && (
          <div className="bg-red-100 text-red-700 p-4 rounded-md">
            <ul className="list-disc list-inside">
                {Object.entries(form.formState.errors).map(([field, error]) => (
                <li key={`${field}-${error.message}`}>{field}: {error.message}</li>
                ))}
            </ul>
          </div>
        )
      } */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo role={role} />}
        {step === 2 && <StepThree role={role} />}

        <div className="flex justify-between w-full gap-2">
          {step > 0 && (
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </Button>
          )}

          {step === 2 ? (
            <Button className="w-full" type="submit">
              Save
            </Button>
          ) : (
            <Button type="button" onClick={handleNext} className="w-full">
              Next
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
