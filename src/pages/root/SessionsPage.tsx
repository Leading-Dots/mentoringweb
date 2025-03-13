import { Session, Status } from "@/API";
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
import SessionLoader from "@/components/common/SessionLoader";
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
          const sortedItems = [...data.sessionsByMentorID.items].sort((a, b) => {
            if (a.status === Status.COMPLETED && b.status !== Status.COMPLETED) return 1;
            if (a.status !== Status.COMPLETED && b.status === Status.COMPLETED) return -1;
            return 0;
          });
          setSessions(sortedItems);
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
          const sortedItems = [...data.sessionsByMenteeID.items].sort((a, b) => {
            if (a.status === Status.COMPLETED && b.status !== Status.COMPLETED) return 1;
            if (a.status !== Status.COMPLETED && b.status === Status.COMPLETED) return -1;
            return 0;
          });
          setSessions(sortedItems);
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
    <div className="flex flex-col p-3 max-w-4xl ">
      {loading ? (
     <SessionLoader />
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.map((session) => (
        <Card
          variant="gradient"
          key={session.id}
          className="w-full space-y-4"
        >
          <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Calendar className="size-8 text-primary" />
            <Badge variant="outline" className="capitalize">
            {session.status}
            </Badge>
          </div>
          <CardTitle className="text-lg line-clamp-2">
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
