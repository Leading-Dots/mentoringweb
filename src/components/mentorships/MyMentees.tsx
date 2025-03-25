import { Mentee, Mentorship } from "@/API";
import { listMentees, mentorshipsByMentorID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React, { useEffect, useState } from "react";
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
import { MentorshipStatus } from "@/API";
import { showToast } from "@/lib/toast";
import { intiateChat } from "@/lib/dbActions";
import { useNavigate } from "react-router-dom";
import { CreateSessionRequestModal } from "../modal/CreateSessionRequestModal";
import MentorshipActionsForMentee from "./MentorshipActionsForMentee";

const MyMentees = () => {
  const { user } = useAuth();
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useNavigate();
  const fetchMyMentees = async () => {
    if (!user?.mentorId) return;

    setLoading(true);
    try {
      // Get all mentorships in a single query
      const { data: mentorshipsData } = await client.graphql({
        query: mentorshipsByMentorID,
        variables: {
          mentorID: user.mentorId,
        },
      });
      setMentorships(mentorshipsData?.mentorshipsByMentorID?.items || []);

      // Extract unique mentee IDs
      const menteeIds = [
        ...new Set(
          mentorshipsData?.mentorshipsByMentorID?.items
            ?.filter((m) => m?.menteeID)
            .map((m) => m?.menteeID)
        ),
      ];

      if (menteeIds.length) {
        // Fetch all mentees in a single query with OR filter
        const { data: menteesData } = await client.graphql({
          query: listMentees,
          variables: {
            filter: {
              or: menteeIds.map((id) => ({ menteeId: { eq: id } })),
            },
          },
        });

        setMentees(menteesData?.listMentees?.items?.filter(Boolean) || []);
      }
    } catch (error) {
      console.error("Error fetching mentees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyMentees();
  }, [user?.mentorId]);

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
  const findMentorshipStatus = (mentee: Mentee) => {
    const mentorship = mentorships?.find(
      (m) => m?.menteeID === mentee?.menteeId
    );
    return mentorship?.mentorshipStatus;
  };

  const handleChat = async (mentee: Mentee) => {
    try {
      if (!user) return showToast("Login to start a chat", "error");
      const chatId = await intiateChat({
        menteeId: mentee.menteeId!,
        mentorId: user?.role === "mentor" ? user?.mentorId : user?.menteeId,
        menteeName: `${mentee.firstName} ${mentee.lastName}`,
        mentorName: `${user?.firstName} ${user?.lastName}`,
      });

      if (!chatId) return;
      console.log(chatId);
      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-3 max-w-4xl space-y-4">
      {loading ? (
        <ListLoader />
      ) : (
        <div className="space-y-4">
          {mentees.map((mentee) => (
            <Card key={mentee!.id} className="w-full">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={mentee.profilePictureUrl}
                    alt={mentee!.firstName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {mentee!.firstName}
                    </h3>
                    <p className="text-sm text-gray-500">{mentee!.bio}</p>
                    {renderStatusBadge(findMentorshipStatus(mentee))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleChat(mentee)}
                  >
                    Chat
                  </Button>
                  <MentorshipActionsForMentee
                    mentee={mentee}
                    mentorshipStatus={findMentorshipStatus(mentee)}
                    mentorshipId={
                      mentorships?.find((m) => m?.menteeID === mentee?.menteeId)
                        ?.id
                    }
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

export default MyMentees;
