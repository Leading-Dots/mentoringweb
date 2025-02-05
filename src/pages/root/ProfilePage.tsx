import { ProfileForm } from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div className="flex flex-col max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">Edit Profile</h1>
      <ProfileForm role={"mentee"} />
    </div>
  );
};

export default ProfilePage;
