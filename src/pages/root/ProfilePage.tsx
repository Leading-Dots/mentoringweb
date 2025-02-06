import { ProfileStatus } from "@/API";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";
import { transformNullValues } from "@/lib/utils";
const ProfilePage = () => {
  const { user } = useAuth();



  const isProfilePublished = user.profileStatus === ProfileStatus.PUBLISHED;

  console.log("isProfilePublished", isProfilePublished);

  console.log("user", user);



  const transformedData = transformNullValues(user, user?.role);

  
  return (
    <div className="flex flex-col max-w-2xl gap-2 p-4">
      <ProfileForm role={user?.role} isProfilePublished={isProfilePublished} initialData={transformedData} />
    </div>
  );
};

export default ProfilePage;
