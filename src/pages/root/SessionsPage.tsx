import { Session } from "@/API";
import { sessionsByMenteeID, sessionsByMentorID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useEffect, useState } from "react";
import { UserRole } from "types";

import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { formatTime } from "@/lib/utils";
const SessionsPage = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSessions = async (role: UserRole) => {
    try {
      setLoading(true);
      if (role === "mentor") {
        // Fetch mentor sessions
        const { data } = await client.graphql({
          query: sessionsByMentorID,
          variables: {
            mentorID: user.mentorId,
          },
        });

        if (data) {
          setSessions(data.sessionsByMentorID.items);
        }
      } else {
        // Fetch mentee sessions
        const { data } = await client.graphql({
          query: sessionsByMenteeID,
          variables: {
            menteeID: user.menteeId,
          },
        });
        if (data) {
          setSessions(data.sessionsByMenteeID.items);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions(user.role);
  }, [user.role]);
  return (
    <div className="flex flex-col p-3 max-w-3xl">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          {sessions.map((session) => (
            <Card
              variant="gradient"
              key={session.id}
              className="w-full md:w-80 space-y-4"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Calendar className="size-8 text-primary" />
                  <Badge variant="outline" className="capitalize">
                    {session.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">
                  {session.sessionTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    {new Date(session.sessionDate!!).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    {formatTime(new Date(session.sessionDate!!))}
                  </div>
                  <Badge variant="default" className="w-fit">
                    ${session.cost}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Link to={`/sessions/${session.id}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionsPage;
