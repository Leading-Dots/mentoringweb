import { ProfileForm } from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();




  console.log("user", user);
  return (
    <div className="flex flex-col max-w-2xl gap-2 p-4">
      <ProfileForm role={"mentee"}  />
    </div>
  );
};

export default ProfilePage;
