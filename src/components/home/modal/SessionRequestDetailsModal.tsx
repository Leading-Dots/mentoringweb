import {
  MentorServices,
  SessionRequest,
  SessionRequestStatus,
  Status,
} from "@/API";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar1Icon, Clock, DollarSign, MessageSquare } from "lucide-react";
import client from "@/lib/apiClient";
import { createSession, updateSessionRequest } from "@/graphql/mutations";
import { showToast } from "@/lib/toast";
import React, { useEffect } from "react";
import { UserCard } from "@/components/common/UserCard";
import { UserRole } from "types";
import { getUser } from "@/lib/dbActions";
import { DialogLoader } from "@/components/common/DialogLoader";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { sendNotification } from "@/lib/firebase/messaging";
import { getMentorServices } from "@/graphql/queries";
import { formatTime } from "@/lib/utils";

interface SessionRequestDetailsModalProps {
  sessionRequest: SessionRequest;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const SessionRequestDetailsModal = ({
  sessionRequest,
  children,
  onConfirm,
}: SessionRequestDetailsModalProps) => {
  const router = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [initiatorData, setInitiatorData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [service, setService] = React.useState<MentorServices>();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const onClose = () => {
    console.log("close");
    setOpen(false);
  };

  const getService = async (serviceId: string) => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: getMentorServices,
        variables: {
          id: serviceId,
        },
      });

      if (data) {
        setService(data.getMentorServices);
      }
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setLoading(false);
    }
  };

  const onAccept = async (sessionRequest: SessionRequest) => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: updateSessionRequest,
        variables: {
          input: {
            id: sessionRequest.id,
            status: SessionRequestStatus.ACCEPTED,
          },
        },
      });

      if (data) {
        // create a new session

        const { data, errors } = await client.graphql({
          query: createSession,
          variables: {
            input: {
              sessionTitle: sessionRequest.sessionTitle,
              mentorID: sessionRequest.mentorID,
              menteeID: sessionRequest.menteeID,
              sessionRequestID: sessionRequest.id,
              sessionDate: sessionRequest.proposedSessionTime,
              duration: sessionRequest.duration,
              cost: sessionRequest.proposedCost,
              status: Status.SCHEDULED,
            },
          },

          // send notification to the other user
        });

        if (data) {
          console.log(errors);

          sendNotification({
            title: "Session Request Accepted",
            body: `Your session request has been accepted!`,
            recipientId:
              sessionRequest.initiatedBy === "mentor"
                ? data.createSession.mentorID
                : sessionRequest.menteeID,
            recipientRole:
              sessionRequest.initiatedBy === "mentor" ? "mentor" : "mentee",
          });

          router("/sessions");

          showToast(
            "Session created successfully",
            "success",
            `Your session has been scheduled successfully for ${sessionRequest.proposedSessionTime}`
          );
        }
      }
    } catch (error) {
      showToast("Failed to accept session request", "error");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const onReject = async (sessionRequest: SessionRequest) => {
    try {
      setLoading(true);
      const response = await client.graphql({
        query: updateSessionRequest,
        variables: {
          input: {
            id: sessionRequest.id,
            status: SessionRequestStatus.REJECTED,
          },
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      showToast("Failed to reject session request", "error");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const getInitiatorData = async () => {
    try {
      setLoading(true);

      const initiatorRole = sessionRequest.initiatedBy as UserRole;
      const initiatorId =
        initiatorRole === "mentor"
          ? sessionRequest.mentorID
          : sessionRequest.menteeID;
      const data = await getUser(initiatorId, initiatorRole);
      console.log(data);
      if (!data) {
        throw new Error("User not found");
      }

      setInitiatorData(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    await getInitiatorData();
    await getService(sessionRequest.mentorServicesID);
  };

  useEffect(() => {
    if (open) {
      fetchData();
    }
  }, [open]);

  const Content = () => {
    return (
      <Card>
        <CardContent className="space-y-2 w-full p-2">
          <Link
            to={
              sessionRequest.initiatedBy === "mentor"
                ? `/mentor/${sessionRequest.mentorID}`
                : `/mentee/${sessionRequest.menteeID}`
            }
          >
            <UserCard
              otherUserData={initiatorData}
              role={sessionRequest.initiatedBy as UserRole}
            />
          </Link>
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3 p-4 rounded-lg">
              {service && (
                <Card className="w-full">
                  <CardContent className="space-y-4 p-3">
                    <div className="flex items-center gap-2">
                      <div>
                        <h4 className="font-semibold">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span>
                          {service.isPaid ? (
                            <span className="text-primary">
                              ₹ {service.cost}
                            </span>
                          ) : (
                            <span className="text-green-600">Free</span>
                          )}
                        </span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-2">
                        <span>{service.duration} Months</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex flex-col gap-3 p-3 rounded-lg border">
              <h3 className="text-lg font-semibold">Session Details</h3>
              <div className="flex items-center gap-2">
                <Calendar1Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  {new Date(
                    sessionRequest.proposedSessionTime
                  ).toLocaleDateString()}{" "}
                  @ {formatTime(new Date(sessionRequest.proposedSessionTime))}
                </span>
              </div>
              {sessionRequest.note && (
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {sessionRequest.note}
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          {loading ? (
            <DialogLoader />
          ) : (
            <div className="px-4 pb-4">
              <DrawerHeader className="pt-4">
                <DrawerTitle className="text-2xl">
                  Session Request Details
                </DrawerTitle>
                <DrawerDescription>
                  Review the session request details and take action
                </DrawerDescription>
              </DrawerHeader>

              <Content />

              <DrawerFooter className="gap-2 w-full mt-4">
                <Button
                  className="w-full"
                  onClick={() => onAccept(sessionRequest)}
                >
                  Accept
                </Button>
                <Button
                  className="w-full text-destructive"
                  variant="outline"
                  onClick={() => onReject(sessionRequest)}
                >
                  Reject
                </Button>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto">
        {loading ? (
          <DialogLoader />
        ) : (
          <>
            <DialogHeader className="">
              <DialogTitle className="text-2xl">
                Session Request Details
              </DialogTitle>
              <DialogDescription>
                Review the session request details and take action
              </DialogDescription>
            </DialogHeader>

            <Content />
            <DialogFooter className="gap-2 w-full">
              <Button
                className="w-full"
                onClick={() => onAccept(sessionRequest)}
              >
                Accept
              </Button>

              <Button
                className="w-full text-destructive"
                variant="outline"
                onClick={() => onReject(sessionRequest)}
              >
                Reject
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SessionRequestDetailsModal;
