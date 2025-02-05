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

interface ProfileFormProps {
  role: UserRole;
  initialData?: MentorProfileFormValues | MenteeProfileFormValues | null;
}

export function ProfileForm({ role, initialData = null }: ProfileFormProps) {
  const [step, setStep] = useState(0);

  

  const { schema, initialValues } = getProfileFormSchema(role);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialData || initialValues,
    mode: "onBlur",
  });

  function onSubmit(data: MentorProfileFormValues | MenteeProfileFormValues) {
    console.log("data", data);
    // Handle form submission
  }
  const handleNext = async () => {
    // Validate step 1 fields
    const step1Fields = [
      "firstName",
      "lastName",
      "email",
      "bio",
    ] as const;

    const isValid = await form.trigger(step1Fields);

    if (!isValid) {
      alert("Please fill out all required fields");
      return;
    }

    setStep(1);
  };
  return (
    <Form {...form}>

     <StepHeader step={step} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo role={role} />}

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

          {step === 0 ? (
            <Button type="button" onClick={handleNext} className="w-full">
              Next
            </Button>
          ) : (
            <Button className="w-full" type="submit">Save</Button>
          )}
        </div>
      </form>
    </Form>
  );
}
