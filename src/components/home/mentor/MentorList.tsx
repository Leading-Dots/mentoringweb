"use client";

import React from "react";
import { type Mentor, ProfileStatus } from "@/API";
import { listMentors } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { MentorCard } from "./MentorCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ListLoader from "@/components/common/ListLoader";
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
      <ListLoader />
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Recommended Mentors For You</h3>
        <Button variant="ghost">
          <Link to="/search-mentors">See all</Link>
        </Button>
      </div>


      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;
