import { Mentee, Mentor } from "@/API";
import ListComponent from "@/components/home/ListComponent";
import { Button } from "@/components/ui/button";
import { listMentors } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useState } from "react";
import { UserRole } from "types";

const Home = () => {
  const [users, setUsers] = useState<Mentor[]>([]);
  const { signOut, user, switchUserRole } = useAuth();
  const getUser = async () => {
    const { data } = await client.graphql({
      query: listMentors,
    });
    console.log(data);
    setUsers(data.listMentors.items);
  };

  const handleRoleSwitch = async () => {
    console.log("switching role");
    await switchUserRole();
  };
  return (
    <main className="container py-4 space-y-5">
      <div
        className="max-w-3xl"
      >
        <h2 className="text-2xl font-semibold">Welcome</h2>



        <div className="flex items-center gap-4">

          <ListComponent />
        </div>

      </div>


     
    </main>
  );
};

export default Home;
