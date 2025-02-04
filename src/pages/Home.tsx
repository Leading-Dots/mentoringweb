import { Mentee } from "@/API";
import { Button } from "@/components/ui/button";
import { listMentees } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<Mentee[]>([]);
  const {signOut} = useAuth();
  const getUser = async () => {
    const { data } = await client.graphql({
      query: listMentees,
    });
    console.log(data);
    setUsers(data.listMentees.items);
  };
  return (
    <div>

      <Button
        onClick={() => {
          signOut();
        }}
      >SignOut</Button>
      <h1>Home</h1>
      <button onClick={getUser}>Get Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
