import { User } from "@/API";
import { listUsers } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUser = async () => {
    const { data } = await client.graphql({
      query: listUsers,
    });
    console.log(data);
    setUsers(data.listUsers.items);
  };
  return (
    <div>
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
