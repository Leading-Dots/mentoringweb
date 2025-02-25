import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  Calendar,
  Check,
  Clock,
  DollarSign,
  ExternalLink,
  MoreHorizontal,
  Star,
  Users,
} from "lucide-react";
import { Mentee, Mentor, Session } from "@/API";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SessionParticipantsCard from "@/components/session/SessionParticipantsCard";
import { SessionDetailsSkeleton } from "@/components/session/SessionDetailsLoader";
import RescheduleSessionModal from "@/components/modal/RescheduleSessionModal";
import AddMeetingLinkModal from "@/components/modal/AddMeetingLinkModal";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { getUser } from "@/lib/dbActions";
import { getSession } from "@/graphql/queries";
import { formatTime } from "@/lib/utils";
import { TagInput } from "@/components/common/TagInput";
import { AddObjectiveModal } from "@/components/modal/AddObjectiveModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddReviewModal from "@/components/modal/AddReviewModal";

const SessionDetailsPage = () => {
  const params = useParams();
  const { user } = useAuth();

  const [session, setSession] = useState<Session | null>(null);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [mentee, setMentee] = useState<Mentee | null>(null);
  const [loading, setLoading] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  const authenticateUser = () => {
    if (session) {
      const participants = [session.menteeID, session.mentorID];
      if (
        !participants.includes(user?.menteeID) ||
        !participants.includes(user?.mentorID)
      ) {
        return <Navigate to="/sessions" />;
      }
    }
  };

  if (!params.id) {
    return <Navigate to="/sessions" />;
  }

  const handleCompleteFlow = async () => {};

  const handleAddReview = async () => {};
  const fetchParticipants = async () => {
    try {
      const [mentorData, menteeData] = await Promise.all([
        await getUser(session?.mentorID!!, "mentor"),
        await getUser(session?.menteeID!!, "mentee"),
      ]);

      if (mentorData) setMentor(mentorData as Mentor);
      if (menteeData) setMentee(menteeData as Mentee);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSessionDetails = async () => {
    try {
      const { data } = await client.graphql({
        query: getSession,
        variables: {
          id: params.id!!,
        },
      });

      setSession(data.getSession as Session);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAll = async () => {
    setLoading(true);
    await fetchSessionDetails();
    authenticateUser();
    await fetchParticipants();
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, [params.id]);

  if (loading) {
    return <SessionDetailsSkeleton />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold tracking-tight">
              {session?.sessionTitle}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>
                {mentor?.firstName} & {mentee?.firstName}
              </span>
            </div>

            {/* Primary CTAs */}
            <div className="flex  gap-2 max-w-xs">
              {session?.meetingLink ? (
                <Link to={session.meetingLink} target="_blank">
                  <Button size="lg">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Join Meeting
                  </Button>
                </Link>
              ) : (
                <AddMeetingLinkModal
                  sessionId={session?.id!!}
                  onConfirm={fetchAll}
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Add Meeting Link</span>
                  </span>
                </AddMeetingLinkModal>
              )}

              <RescheduleSessionModal
                sessionId={session?.id!!}
                currentSessionDate={session?.sessionDate!!}
                onConfirm={fetchAll}
              >
                <Button variant="outline" size="lg">
                  Reschedule
                </Button>
              </RescheduleSessionModal>

              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="lg">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleCompleteFlow}>
                      <Check className="mr-2 h-4 w-4" />
                      Mark as Completed
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setReviewModal(true)}>
                      <Star className="mr-2 h-4 w-4" />
                      Add Review
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <AddReviewModal open={reviewModal} setOpen={setReviewModal} session={session} onConfirm={fetchAll} />
              </>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Session Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* ... (keep your existing Card components) ... */}
          </div>

          {/* Participants Card */}
          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              {session && (
                <SessionParticipantsCard mentor={mentor} mentee={mentee} />
              )}
            </CardContent>
          </Card>

          {/* Objectives Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Session Objectives</CardTitle>
              {session && (
                <AddObjectiveModal session={session} onConfirm={fetchAll}>
                  <Button variant="outline">Add Objectives</Button>
                </AddObjectiveModal>
              )}
            </CardHeader>
            <CardContent>
              {session?.objectives && session.objectives.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {session.objectives.map((objective, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                        ✓
                      </div>
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No objectives set for this session yet.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsPage;
