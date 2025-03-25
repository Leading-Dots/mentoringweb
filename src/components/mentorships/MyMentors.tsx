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
import { showToast } from "@/lib/toast";
import { intiateChat } from "@/lib/dbActions";
import { useNavigate } from "react-router-dom";
import { CreateSessionRequestModal } from "../modal/CreateSessionRequestModal";
import MentorshipActionsForMentor from "./MentorshipActionsForMentor";

const MyMentors = () => {
  const { user } = useAuth();
  console.log(user);

  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useNavigate();
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

  const handleChat = async (mentor: Mentor) => {
    try {
      if (!user) return showToast("Login to start a chat", "error");
      const chatId = await intiateChat({
        mentorId: mentor.mentorId as string,
        menteeId:
          user?.role === "mentee" ? user?.menteeId : (user?.mentorId as string),
        mentorName: `${mentor.firstName} ${mentor.lastName}`,
        menteeName: `${user?.firstName} ${user?.lastName}`,
      });

      console.log(chatId);

      if (!chatId) return;

      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
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
              or: mentorIds.map((id) => ({ mentorId: { eq: id } })),
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleChat(mentor)}
                  >
                    Chat
                  </Button>
                  <MentorshipActionsForMentor
                    mentor={mentor}
                    mentorshipId={
                      mentorships?.find((m) => m?.mentorID === mentor?.mentorId)
                        ?.id
                    }
                    mentorshipStatus={findMentorshipStatus(mentor)}
                  />
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
