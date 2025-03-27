import { SessionRequest, SessionRequestStatus, Status } from "@/API";
import {
  sessionRequestsByMenteeID,
  sessionRequestsByMentorID,
} from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React from "react";
import { UserRole } from "types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Calendar, ClipboardList, Inbox, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import SessionRequestDetailsModal from "./modal/SessionRequestDetailsModal";

const SessionRequestComponent = () => {
  const { user } = useAuth();

  const userRole = user?.role;
  const [sessionRequests, setSessionRequests] = React.useState<
    SessionRequest[]
  >([]);

  if (!user) {
    return null;
  }

  const getSessionRequests = async (role: UserRole) => {
    try {
      console.log(role, "role");
      if (role === "mentor") {
        console.log(user?.mentorId, "mentor");
        const { data } = await client.graphql({
          query: sessionRequestsByMentorID,
          variables: {
            filter: {
              status: {
                eq: SessionRequestStatus.SENT,
              },
            },
            mentorID: user?.mentorId,
          },
        });

        if (data) {
          setSessionRequests(data.sessionRequestsByMentorID.items);
        }
      } else {
        console.log(user?.menteeId, "mentee");
        const { data } = await client.graphql({
          query: sessionRequestsByMenteeID,
          variables: {
            menteeID: user?.menteeId,
          },
        });

        if (data) {
          //show only pending requests

          const pendingRequests = data.sessionRequestsByMenteeID.items.filter(
            (request: SessionRequest) =>
              request.status === SessionRequestStatus.SENT
          );
          setSessionRequests(pendingRequests);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (userRole) {
      getSessionRequests(userRole);
    }
  }, []);

  if (sessionRequests.length === 0) {
    return null;
  }
  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Session Requests</h2>
      </div>
      <div className="space-y-4">
        {sessionRequests.length === 0 ? (
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <Inbox className="w-12 h-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No session requests found
              </p>
            </div>
          </Card>
        ) : (
          sessionRequests.map((request) => (
            <Card key={request.id} className="p-4">
              <CardHeader className="p-0 pb-4">
                <div className="flex justify-between items-center">
                  <Link
                    to={
                      request.initiatedBy === "mentee"
                        ? `/mentee/${request.menteeID}`
                        : `/mentor/${request.mentorID}`
                    }
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <h3 className="font-semibold">
                        {request.sessionTitle}-Request
                      </h3>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">
                  {request.sessionDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Status: {request.status}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4">
                <SessionRequestDetailsModal sessionRequest={request}>
                  {userRole !== request.initiatedBy && (
                    <span className="text-primary underline cursor-pointer">
                      View
                    </span>
                  )}
                </SessionRequestDetailsModal>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SessionRequestComponent;
