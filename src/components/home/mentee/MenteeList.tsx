"use client";

import React from "react";
import { Mentee, ProfileStatus } from "@/API";
import { listMentees } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { MenteeCard } from "./MenteeCard";
import { Link } from "react-router-dom";
const menteeList = () => {
  const [mentees, setmentees] = React.useState<Mentee[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchmentees = async () => {
      try {
        const { data } = await client.graphql({
          query: listMentees,
        });

        const publishedmentees = data.listMentees.items.filter(
          (mentee: Mentee) => mentee.profileStatus === ProfileStatus.PUBLISHED
        );

        setmentees(publishedmentees);
      } catch (error) {
        console.error("Error fetching mentees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchmentees();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading mentees...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Find mentees</h3>
      </div>
      {mentees.map((mentee) => (
        <MenteeCard key={mentee.id} mentee={mentee} />
      ))}
    </div>
  );
};

export default menteeList;
