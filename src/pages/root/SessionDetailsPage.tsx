import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  Calendar,
  Check,
  Clock,
  DollarSign,
  ExternalLink,
  MoreHorizontal,
  Plus,
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
import { AddObjectiveModal } from "@/components/modal/AddObjectiveModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddReviewModal from "@/components/modal/AddReviewModal";
import { formatTime } from "@/lib/utils";

const SessionDetailsPage = () => {
  const params = useParams();
  const { user } = useAuth();

  const [session, setSession] = useState<Session | null>(null);
  const [participants, setParticipants] = useState<{
    mentor: Mentor | null;
    mentee: Mentee | null;
  }>({ mentor: null, mentee: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Moved authentication logic to a memoized value
  const isAuthorized = useMemo(() => {
    if (!session || !user) return false;
    const userIds = [user.menteeId, user.mentorId].filter(Boolean);
    return [session.menteeID, session.mentorID].some((id) =>
      userIds.includes(id)
    );
  }, [session, user]);

  const fetchAll = async () => {
    if (!params.id) return;

    try {
      setLoading(true);
      // Fetch session data
      const { data } = await client.graphql({
        query: getSession,
        variables: { id: params.id },
      });

      const sessionData = data.getSession as Session;
      setSession(sessionData);

      // Fetch participants in parallel
      const [mentorData, menteeData] = await Promise.all([
        getUser(sessionData.mentorID, "mentor"),
        getUser(sessionData.menteeID, "mentee"),
      ]);

      setParticipants({
        mentor: mentorData as Mentor,
        mentee: menteeData as Mentee,
      });
    } catch (error) {
      console.error("Error refreshing data:", error);
      setError(
        error instanceof Error ? error.message : "Failed to refresh data"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteFlow = () => {};

  const handleAddReview = () => {};

  
  useEffect(() => {
    let mounted = true;

    const fetchSessionData = async () => {
      if (!params.id) return;

      try {
        setLoading(true);
        const { data } = await client.graphql({
          query: getSession,
          variables: { id: params.id },
        });

        if (!mounted) return;

        const sessionData = data.getSession as Session;
        setSession(sessionData);

        // Fetch participants in parallel
        const [mentorData, menteeData] = await Promise.all([
          getUser(sessionData.mentorID, "mentor"),
          getUser(sessionData.menteeID, "mentee"),
        ]);

        if (!mounted) return;

        setParticipants({
          mentor: mentorData as Mentor,
          mentee: menteeData as Mentee,
        });
      } catch (error) {
        if (!mounted) return;
        console.error("Error fetching session data:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load session"
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchSessionData();

    return () => {
      mounted = false;
    };
  }, [params.id]);

  // Early returns for different states
  if (!params.id) {
    return <Navigate to="/sessions" />;
  }

  if (!isAuthorized && !loading) {
    return <Navigate to="/sessions" />;
  }

  if (loading) {
    return <SessionDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  const { mentor, mentee } = participants;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6">
            {/* Participant Card - Left Side */}

            {/* Session Details - Right Side */}
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
              <div className="flex  gap-3 max-w-sm w-full">
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
                    <span className="flex items-center gap-4">
                      <Calendar className="h-5 w-5" />
                      <span>Add Meeting</span>
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

             
              </div>
            </div>
          </div>
        </div>

        <Card className="">
          <CardHeader>
            <CardTitle className="text-xl">Participants</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent> 
            {session && (
              <SessionParticipantsCard mentor={mentor} mentee={mentee} session={session} onConfirm={fetchAll}/>
            )}
          </CardContent>
        </Card>

        {/* Content Section */}
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="grid gap-6">
            {/* Session Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="" variant="gradient">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                    Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    {new Date(session?.sessionDate || "").toLocaleDateString()}
                  </p>
                  <p className="text-sm ">
                    {formatTime(new Date(session?.sessionDate || ""))}
                  </p>
                </CardContent>
              </Card>

              <Card className="" variant="gradient">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium ">
                    <Clock className="mr-2 h-4 w-4 text-green-500" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    {session?.duration} min
                  </p>
                  <p className="text-sm ">Session Length</p>
                </CardContent>
              </Card>
              <Card className="" variant="gradient">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium ">
                    <DollarSign className="mr-2 h-4 w-4 text-purple-500" />
                    Session Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">${session?.cost}</p>
                  <p className="text-sm ">Total Amount</p>
                </CardContent>
              </Card>
            </div>
            {/* Objectives Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Session Objectives</CardTitle>
                {session && (
                  <AddObjectiveModal session={session} onConfirm={fetchAll}>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 " />
                      Add Objective
                    </Button>
                  </AddObjectiveModal>
                )}
              </CardHeader>
              <CardContent>
                {session?.objectives && session.objectives.length > 0 ? (
                  <div className="space-y-3">
                    {session.objectives.map((objective, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border border-muted transition-all hover:bg-muted"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                            <Check className="h-3 w-3" />
                          </div>
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
    </div>
  );
};

export default SessionDetailsPage;
