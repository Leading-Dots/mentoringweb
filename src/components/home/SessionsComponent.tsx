import { Session } from "@/API";
import { sessionsByMenteeID, sessionsByMentorID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React, { useEffect } from "react";
import { UserRole } from "types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock } from "lucide-react";
import { formatTime } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const SessionsComponent = () => {
  const { user } = useAuth();
  const userRole = user?.role;

  const [sessions, setSessions] = React.useState<Session[]>([]);

  const getSessions = async (role: UserRole) => {
    try {
      if (role === "mentor") {
        const { data } = await client.graphql({
          query: sessionsByMentorID,
          variables: {
            mentorID: user?.mentorId,
          },
        });

        if (data) {
          const mentorSessions = data.sessionsByMentorID.items;
          setSessions(mentorSessions);
        }
      } else {
        const { data } = await client.graphql({
          query: sessionsByMenteeID,
          variables: {
            menteeID: user?.menteeId,
          },
        });

        if (data) {
          const menteeSessions = data.sessionsByMenteeID.items;
          setSessions(menteeSessions);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return null;
  }

  useEffect(() => {
    if (userRole) {
      getSessions(userRole);
    }
  }, [userRole]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Your Sessions</h3>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/sessions">See All</Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {sessions.map((session) => (
          <Card key={session.id} className="w-full md:w-80 space-y-2 ">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Calendar className="size-8 text-primary" />
                <Badge variant="outline" className="capitalize">
                  {session.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{session.sessionTitle}</CardTitle>
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
    </div>
  );
};

export default SessionsComponent;
