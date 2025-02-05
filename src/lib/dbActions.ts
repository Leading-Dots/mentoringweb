import { listMentees, listMentors } from "@/graphql/queries";
import client from "./apiClient";
import { createMentee, createMentor } from "@/graphql/mutations";
import { ProfileStatus } from "@/API";
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
          email: email,
          mentorId: userId,
          profileStatus: ProfileStatus.PENDING,
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
      query: createMentee,
      variables: {
        input: {
          menteeId: userId,
          email: email,
          profileStatus: ProfileStatus.PENDING,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createMentee;
  } catch (error) {
    console.error(error);
  }
};

const findMentor = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listMentors,
      variables: {
        filter: {
          mentorId: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.listMentors.items[0];
  } catch (error) {
    console.error(error);
  }
};

const findMentee = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listMentees,
      variables: {
        filter: {
          menteeId: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.listMentees.items[0];
  } catch (error) {
    console.error(error);
  }
};
