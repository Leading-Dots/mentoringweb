import { Session } from "@/API";
import { sessionsByMenteeID, sessionsByMentorID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useEffect, useState } from "react";
import { UserRole } from "types";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col mx-auto py-10 px-4 max-w-4xl">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {sessions.map((session) => (
            <Card key={session.id} className="w-full md:w-1/2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-base">
                  {session.sessionTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {session.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      {new Date(session.sessionDate!!).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Badge variant={"default"}>${session.cost}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Link to={`/sessions/${session.id}`}>
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
