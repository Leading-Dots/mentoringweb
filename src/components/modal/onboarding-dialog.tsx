"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import onboardingImage from "@/assets/onboarding.svg";
import { useNavigate } from "react-router-dom";

interface ObjectiveItemProps {
  title: string;
  description: string;
}

interface OnboardingDialogProps {
  children?: React.ReactNode;
}

export default function OnboardingDialog({}: OnboardingDialogProps) {
  const [step, setStep] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const router = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    console.log("isOnboarding", showDialog);
    if (user && !user.firstName && !user.lastName) {
      setShowDialog(true);
    }
  }, []);

  const stepContent: ObjectiveItemProps[] = [
    {
      title: "Welcome to the Mentoring Platform",
      description:
        "We're excited to have you join our community! Let's get you started with a quick tour of the platform.",
    },
    {
      title: "Complete Your Profile",
      description:
        "Take a moment to set up your profile. Add your skills, experience, and areas of interest to help us match you with the right connections.",
    },
    {
      title: "Find Your Mentor or Mentee",
      description:
        "Browse through profiles, use our matching system, and connect with people who align with your goals and interests.",
    },
    {
      title: "Schedule Sessions",
      description:
        "Use our scheduling tool to book mentoring sessions, set meeting agendas, and track your progress together.",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleComplete = () => {
    router("/profile");
  };

  return (
    <Dialog open={showDialog} onOpenChange={() => setShowDialog(false)}>
      <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
        <div className="p-2">
          <img
            className="w-full rounded-md object-contain"
            src={onboardingImage}
            width={360}
            height={180}
            
            alt="dialog"
          />
        </div>
        <div className="space-y-6 px-6 pt-3 pb-6">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription>
              {stepContent[step - 1].description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-primary size-1.5 rounded-full",
                    index + 1 === step ? "bg-primary" : "opacity-20"
                  )}
                />
              ))}
            </div>
            <DialogFooter className="flex justify-between gap-2">

                {step > 1 && step < totalSteps && (
                  <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setStep(Math.max(1, step - 1))}
                  >
                  Previous
                  </Button>
                )}
              {step < totalSteps ? (
                <Button
                
                  className="group"
                  type="button"
                  size="lg"
                  onClick={handleContinue}
                >
                  Next
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button size="lg" onClick={handleComplete} className="" type="button">Done</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
