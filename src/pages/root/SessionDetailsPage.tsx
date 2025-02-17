import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Calendar, Clock, DollarSign, ExternalLink, Users } from "lucide-react";
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

const SessionDetailsPage = () => {
  const params = useParams();
  const { user } = useAuth();

  const [session, setSession] = useState<Session | null>(null);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [mentee, setMentee] = useState<Mentee | null>(null);
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen  py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className=" rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                {session?.sessionTitle}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>
                  {mentor?.firstName} & {mentee?.firstName}
                </span>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              {session?.meetingLink ? (
                <Link
                  to={session.meetingLink}
                  target="_blank"
                  className="flex-1 md:flex-none"
                >
                  <Button className="w-full" size="lg">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Join Meeting
                  </Button>
                </Link>
              ) : (
                <AddMeetingLinkModal
                  sessionId={session?.id!!}
                  onConfirm={fetchAll}
                >
                  <Button className="w-full md:w-auto" size="lg">
                    Add Meeting Link
                  </Button>
                </AddMeetingLinkModal>
              )}
              <RescheduleSessionModal
                sessionId={session?.id!!}
                currentSessionDate={session?.sessionDate!!}
                onConfirm={fetchAll}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Reschedule
                </Button>
              </RescheduleSessionModal>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Session Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium text-gray-600">
                    <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                    Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    {new Date(session?.sessionDate || "").toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatTime(new Date(session?.sessionDate || ""))}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium text-gray-600">
                    <Clock className="mr-2 h-4 w-4 text-green-500" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    {session?.duration} min
                  </p>
                  <p className="text-sm text-gray-600">Session Length</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-medium text-gray-600">
                    <DollarSign className="mr-2 h-4 w-4 text-purple-500" />
                    Session Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">${session?.cost}</p>
                  <p className="text-sm text-gray-600">Total Amount</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Participants Sidebar */}
          <div className="md:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Participants</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                {session && (
                  <SessionParticipantsCard mentor={mentor} mentee={mentee} />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          Add Objectives
          {session && (
            <AddObjectiveModal session={session} onConfirm={fetchAll}>
              <Button>Add Objectives</Button>
            </AddObjectiveModal>
          )}
          {session?.objectives && session.objectives.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Session Objectives</h2>
              <div className="flex flex-col gap-2">
                {session.objectives.map((objective, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-600">{index + 1}.</span>
                    <span className="text-lg font-semibold">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsPage;
