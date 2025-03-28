import { ProfileStatus } from "@/API";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";
import { transformNullValues } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { AlertCircle } from "lucide-react";
const ProfilePage = () => {
  const { user, refreshUser } = useAuth();

  const isProfilePublished = user.profileStatus === ProfileStatus.PUBLISHED;

  console.log("isProfilePublished", isProfilePublished);

  console.log("user", user);

  const transformedData = transformNullValues(user, user?.role);

  return (
    <div className="flex flex-col max-w-2xl gap-2 p-4">
      {user!.profileStatus === ProfileStatus.INPROGRESS && (
        <Alert variant="default" className="mb-4 ">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Profile Under Review</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            Your profile is currently being reviewed by admin.
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                refreshUser();
              }}
            >
              <RefreshCcw className="h-4 w-4" />
              Check Status
            </Button>
          </AlertDescription>
        </Alert>
      )}
      <ProfileForm
        role={user?.role}
        isProfilePublished={isProfilePublished}
        initialData={transformedData}
      />
    </div>
  );
};

export default ProfilePage;
