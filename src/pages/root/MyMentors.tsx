import { Mentor } from "@/API";
import { getMentor, mentorshipsByMenteeID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { aw } from "node_modules/framer-motion/dist/types.d-6pKw1mTI";
import React, { useEffect, useState } from "react";

const MyMentors = () => {
  const { user } = useAuth();
  console.log(user);

  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMyMentors = async () => {
    try {
      const { data } = await client.graphql({
        query: mentorshipsByMenteeID,
        variables: {
          menteeID: user.menteeId,
        },
      });

      if (data) {
        const mentorships = data.mentorshipsByMenteeID.items;
        console.log(mentorships);

        let fetchedMentors: Mentor[] = [];

        const allMentors = await Promise.all(
          mentorships.map(async (mentorship) => {
            const { data } = await client.graphql({
              query: getMentor,
              variables: {
                id: mentorship.mentorID,
              },
            });
            mentors.push(data.getMentor as Mentor);
          })
        );
        console.log(fetchedMentors);
        setMentors(mentors);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyMentors();
  }, []);

  return (
    <div className="flex flex-col p-3 max-w-4xl ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg"
            >
              <img
                src={mentor.profilePictureUrl}
                alt={mentor.firstName}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{mentor.firstName}</h3>
                <p className="text-sm text-gray-500">{mentor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyMentors;
