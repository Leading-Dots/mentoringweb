import client from "./apiClient";
import { createMentor } from "@/graphql/mutations";
type ROLE = "mentor" | "mentee";
export const createUser = async (role: ROLE, email: string, userId: string) => {
  if (role === "mentor") {
    return await addMentor(email, userId);
  } else {
    return await addMentee(email, userId);
  }
};

const addMentor = async (email: string, userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: createMentor,
      variables: {
        input: {
          id: userId,
          email,
        },
      },
    });

    if (errors) {
      throw new Error(errors[0].message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const addMentee = async (email: string, userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: createMentor,
      variables: {
        input: {
          id: userId,
          email,
        },
      },
    });

    if (errors) {
      throw new Error(errors[0].message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
