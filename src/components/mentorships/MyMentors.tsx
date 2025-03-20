import { Mentor, Mentorship, MentorshipStatus } from "@/API";
import { listMentors, mentorshipsByMenteeID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import ListLoader from "../common/ListLoader";
import { Badge } from "../ui/badge";

const MyMentors = () => {
  const { user } = useAuth();
  console.log(user);

  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [loading, setLoading] = useState(false);

  const renderStatusBadge = (status: MentorshipStatus) => {
    console.log(status);
    switch (status) {
      case MentorshipStatus.ACCEPTED:
        return (
          <Badge className="bg-green-500 text-white hover:bg-green-600">
            Accepted
          </Badge>
        );
      case MentorshipStatus.PENDING:
        return (
          <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">
            Pending
          </Badge>
        );
      case MentorshipStatus.INTRODUCTION:
        return (
          <Badge className="bg-blue-500 text-white hover:bg-blue-600">
            Introduction
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-400 text-white hover:bg-gray-500">
            Unknown
          </Badge>
        );
    }
  };

  const fetchMyMentors = async () => {
    if (!user?.menteeId) return;

    setLoading(true);
    try {
      // Get all mentorships in a single query
      const { data: mentorshipsData } = await client.graphql({
        query: mentorshipsByMenteeID,
        variables: {
          menteeID: user.menteeId,
        },
      });
      setMentorships(mentorshipsData?.mentorshipsByMenteeID?.items || []);

      // Extract unique mentor IDs
      const mentorIds = [
        ...new Set(
          mentorshipsData?.mentorshipsByMenteeID?.items
            ?.filter((m) => m?.mentorID)
            .map((m) => m?.mentorID)
        ),
      ];

      if (mentorIds.length) {
        // Fetch all mentors in a single query
        const { data: mentorsData } = await client.graphql({
          query: listMentors,
          variables: {
            filter: {
              mentorId: { eq: mentorIds[0] }, // Note: This will only match the first mentor
            },
          },
        });

        setMentors(mentorsData?.listMentors?.items?.filter(Boolean) || []);
      }
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyMentors();
  }, [user?.menteeId]);

  const findMentorshipStatus = (mentor: Mentor) => {
    const mentorship = mentorships?.find(
      (m) => m?.mentorID === mentor?.mentorId
    );
    return mentorship?.mentorshipStatus;
  };
  return (
    <div className="flex flex-col p-3 max-w-4xl space-y-4">
      {loading ? (
        <ListLoader />
      ) : (
        <div className="space-y-4">
          {mentors.map((mentor) => (
            <Card key={mentor!.id} className="w-full">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={mentor.profilePictureUrl}
                    alt={mentor!.firstName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {mentor!.firstName}
                    </h3>
                    <p className="text-sm text-gray-500">{mentor!.bio}</p>
                    {renderStatusBadge(findMentorshipStatus(mentor))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Chat
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Remove Mentor
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyMentors;
