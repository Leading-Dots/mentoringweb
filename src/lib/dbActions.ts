import { getMentee, getMentor } from "@/graphql/queries";
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

export const getUser = async (userId: string, role: ROLE) => {
  if (role === "mentor") {
    return await findMentor(userId);
  } else {
    return await findMentee(userId);
  }
};

const addMentor = async (email: string, userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: createMentor,
      variables: {
        input: {
          id: userId,
          email: email,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createMentor;
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
          email: email,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createMentor;
  } catch (error) {
    console.error(error);
  }
};

const findMentor = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getMentor,
      variables: {
        id: userId,
      },
    });
    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.getMentor;
  } catch (error) {
    console.error(error);
  }
};

const findMentee = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getMentee,
      variables: {
        id: userId,
      },
    });
    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.getMentee;
  } catch (error) {
    console.error(error);
  }
};
