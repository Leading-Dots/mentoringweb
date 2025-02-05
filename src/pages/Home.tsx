import { Mentee, Mentor } from "@/API";
import { Button } from "@/components/ui/button";
import {  listMentors } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<Mentor[]>([]);
  const {signOut, user} = useAuth();
  const getUser = async () => {
    const { data } = await client.graphql({
      query: listMentors,
    });
    console.log(data);
    setUsers(data.listMentors.items);
  };
  return (
    <div>

      <h1>Welcome {user?.email}</h1>
      <Button
        onClick={() => {
          signOut();
        }}
      >SignOut</Button>
      <h1>Home</h1>
      <button onClick={getUser}>Get Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
