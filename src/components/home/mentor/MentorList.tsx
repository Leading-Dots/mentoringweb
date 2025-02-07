"use client";

import React from "react";
import { type Mentor, ProfileStatus } from "@/API";
import { listMentors } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { MentorCard } from "./MentorCard";
const MentorList = () => {
  const [mentors, setMentors] = React.useState<Mentor[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchMentors = async () => {
      try {
        const { data } = await client.graphql({
          query: listMentors,
        });

        const publishedMentors = data.listMentors.items.filter(
          (mentor: Mentor) => mentor.profileStatus === ProfileStatus.PUBLISHED
        );

        setMentors(publishedMentors);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading mentors...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold">Find mentees</h3>

      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;
