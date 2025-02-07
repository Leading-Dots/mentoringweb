import { Mentee, Mentor } from "@/API";
import ListComponent from "@/components/home/ListComponent";
import { listMentors } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<Mentor[]>([]);
  const { switchUserRole } = useAuth();


  
  return (
    <main className="container p-2 space-y-5">
      <div
        className="max-w-3xl space-y-4"
      >
       

        <div className="flex items-center justify-between">
          
          <ListComponent />
        </div>

      </div>


     
    </main>
  );
};

export default Home;
