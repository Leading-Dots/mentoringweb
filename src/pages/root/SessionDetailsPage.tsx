import { Mentee, Mentor, Session } from "@/API";
import SessionParticipantsCard from "@/components/session/SessionParticipantsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { getUser } from "@/lib/dbActions";
import { Calendar, Clock, DollarSign, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SessionDetailsSkeleton } from "@/components/session/SessionDetailsLoader";
import RescheduleSessionModal from "@/components/modal/RescheduleSessionModal";
import AddMeetingLinkModal from "@/components/modal/AddMeetingLinkModal";
import { formatTime } from "@/lib/utils";
const SessionDetailsPage = () => {
  const params = useParams();
  const { user } = useAuth();

  const [session, setSession] = useState<Session | null>(null);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [mentee, setMentee] = useState<Mentee | null>(null);
  const [loading, setLoading] = useState(false);

  const authenticateUser = () => {
    if (session) {
      const participants = [session.menteeID, session.mentorID];

      // If the user is not a participant in the session, redirect them to the sessions page
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
  }, [params!.id]);

  if (loading) {
    return <SessionDetailsSkeleton />;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Hero Section */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {session?.sessionTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {mentor?.firstName} - {mentee?.firstName}
          </p>
        </div>
        {/* Participants Card */}
        <Card className="w-full sm:w-80 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-md font-semibold sm:text-lg">
              Session Participants
            </CardTitle>
          </CardHeader>
          <CardContent>
            {session && (
              <SessionParticipantsCard mentor={mentor} mentee={mentee} />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Session Details */}
      <div className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-md text-muted-foreground">
                <Calendar className=" sm:size-6 text-blue-500" />
                Date & Time
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-medium">
              {new Date(session?.sessionDate || "").toLocaleDateString()} @ {formatTime(new Date(session?.sessionDate || ""))}
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-md text-muted-foreground">
                <Clock className="size-5 sm:size-6 text-green-500" />
                Duration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-medium">
              {session?.duration} minutes
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-md sm:text-md text-muted-foreground">
                <DollarSign className="size-5 sm:size-6 text-purple-500" />
                Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-medium">
              ${session?.cost}
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {session?.meetingLink ? (
            <Link
              to={session.meetingLink}
              target="_blank"
              className="w-full sm:flex-1"
            >
              <Button size="icon"  className="w-full" variant="default">
                <ExternalLink className="size-5" />
                Join Meeting
              </Button>
            </Link>
          ) : (
            <AddMeetingLinkModal sessionId={session?.id!!} onConfirm={fetchAll}>
              <Button size="lg" className="w-full sm:flex-1" variant="default">
                Add Meeting Link
              </Button>
            </AddMeetingLinkModal>
          )}
          <RescheduleSessionModal
            sessionId={session?.id!!}
            currentSessionDate={session?.sessionDate!!}
            onConfirm={fetchAll}
          >
            <Button size="lg" className="w-full sm:flex-1" variant="outline">
              Reschedule Session
            </Button>
          </RescheduleSessionModal>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsPage;
