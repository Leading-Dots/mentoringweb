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
    <div className="container max-w-md ">
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
            <Card key={request.id} className="transition-all duration-200 hover:shadow-md">
              <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                  <Link
                    to={
                      request.initiatedBy === "mentee"
                        ? `/mentee/${request.menteeID}`
                        : `/mentor/${request.mentorID}`
                    }
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">
                        {request.sessionTitle}
                       
                      </h3>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2 bg-secondary/20 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 py-3">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">
                  {request.sessionDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge 
                    variant="secondary" 
                    className="px-3 py-1 text-xs font-medium rounded-full"
                  >
                    {request.status}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-4">
                <SessionRequestDetailsModal sessionRequest={request}>
                  {userRole !== request.initiatedBy && (
                    <span className="text-primary hover:text-primary/80 font-medium cursor-pointer transition-colors">
                      View Details →
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
