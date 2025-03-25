import MyMentees from "@/components/mentorships/MyMentees";
import MyMentors from "@/components/mentorships/MyMentors";
import PendingRequestsModal from "@/components/mentorships/PendingRequests";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const MyMentorships = () => {
  const { user } = useAuth();

  const userRole = user?.role;
  return (
    <div className="space-y-4 max-w-3xl">
      <Tabs defaultValue={userRole === "mentee" ? "mentors" : "mentees"} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          {userRole === "mentee" ? (
            <TabsTrigger value="mentors">My Mentors</TabsTrigger>
          ) : (
            <TabsTrigger value="mentees">My Mentees</TabsTrigger>
          )}
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="mentors">
          <MyMentors />
        </TabsContent>
        <TabsContent value="mentees">
          <MyMentees />
        </TabsContent>
        <TabsContent value="pending">
          <PendingRequestsModal />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyMentorships;
