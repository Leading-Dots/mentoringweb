import { IntroductionRequest, MentorshipStatus } from "@/API";
import {
  introductionRequestsByMenteeID,
  introductionRequestsByMentorID,
} from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import MentorshipRequestDetailsModal from "../home/modal/MentorshipRequestDetailsModal";

const PendingRequestsModal = () => {
  const { user } = useAuth();
  const userRole = user?.role;

  const [requests, setRequests] = React.useState<IntroductionRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingMentorShipRequest = async () => {
    try {
      setLoading(true);
      if (userRole === "mentor") {
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
          setRequests(data.introductionRequestsByMentorID.items);
        }
      } else {
        const { data } = await client.graphql({
          query: introductionRequestsByMenteeID,
          variables: {
            filter: {
              status: {
                eq: MentorshipStatus.PENDING,
              },
            },
            menteeID: user?.menteeId,
          },
        });
        if (data) {
          setRequests(data.introductionRequestsByMenteeID.items);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userRole) {
      fetchPendingMentorShipRequest();
    }
  }, []);

  return (
    <div className="space-y-4 p-4">
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center text-gray-500">No pending requests</div>
      ) : (
        requests.map((request) => (
          <Card key={request.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{request.title}</h3>
                      <p className="text-sm text-gray-500">
                        {request.note || "No message provided"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-4">
                    <MentorshipRequestDetailsModal introRequest={request} onConfirm={fetchPendingMentorShipRequest}>
                      <Button variant="outline">View</Button>
                    </MentorshipRequestDetailsModal>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default PendingRequestsModal;
