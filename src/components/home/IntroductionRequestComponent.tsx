import {
  IntroductionRequest,
  MentorshipStatus,
} from "@/API";
import {
  introductionRequestsByMenteeID,
  introductionRequestsByMentorID,
} from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React from "react";
import { UserRole } from "types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Calendar, Inbox, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import SessionRequestDetailsModal from "./modal/SessionRequestDetailsModal";
import IntroductionRequestDetailsModal from "./modal/MentorshipRequestDetailsModal";

const IntroductionRequestComponent = () => {
  const { user } = useAuth();

  const userRole = user?.role;
  const [introductionRequests, setIntroductionRequests] = React.useState<
    IntroductionRequest[]
  >([]);

  if (!user) {
    return null;
  }

  const getIntroductionRequests = async (role: UserRole) => {
    try {
      console.log(role, "role");
      if (role === "mentor") {
        console.log(user?.mentorId, "mentor");
        const { data } = await client.graphql({
          query: introductionRequestsByMentorID,
          variables: {
            filter: {
                status: {
                eq: MentorshipStatus.PENDING,
                },
            },
            mentorID: user?.mentorId,
          },
        });

        if (data) {
          setIntroductionRequests(data.introductionRequestsByMentorID.items);
        }
      } else {
        console.log(user?.menteeId, "mentee");
        const { data } = await client.graphql({
          query: introductionRequestsByMenteeID,
          variables: {
            menteeID: user?.menteeId,
            filter: {
              status: {
                eq: MentorshipStatus.PENDING,
              },
            },
          },
        });

        if (data) {
          //show only pending requests

          setIntroductionRequests(data.introductionRequestsByMenteeID.items);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (userRole) {
      getIntroductionRequests(userRole);
    }
  }, []);

  if (introductionRequests.length === 0) {
    return null;
  }
  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Mentorship Requests</h2>
      </div>
      <div className="space-y-4">
        {introductionRequests.length === 0 ? (
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <Inbox className="w-12 h-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No session requests found
              </p>
            </div>
          </Card>
        ) : (
          introductionRequests.map((request) => (
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
                        {request.title}-Request
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
                    {request.note}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Status: {request.status}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4">
                <IntroductionRequestDetailsModal introRequest={request}>
                  {userRole !== request.initiatedBy && (
                    <span className="text-primary underline cursor-pointer">
                      View
                    </span>
                  )}
                </IntroductionRequestDetailsModal>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default IntroductionRequestComponent;
