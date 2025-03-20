import MyMentees from "@/components/mentorships/MyMentees";
import MyMentors from "@/components/mentorships/MyMentors";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const MyMentorships = () => {
  const { user } = useAuth();

  const userRole = user?.role;
  return userRole === "mentor" ? <MyMentees /> : <MyMentors />;
};

export default MyMentorships;
