import {
  notificationsByMenteeID,
  notificationsByMentorID,
} from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Notification } from "@/API";
import { formatDistanceToNow } from "date-fns";

const NotificationsPage = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();

  const userRole = user?.role;
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      if (userRole === "mentor") {
        const { data } = await client.graphql({
          query: notificationsByMentorID,
          variables: {
            mentorID: user.mentorId,
          },
        });
        setNotifications(data.notificationsByMentorID.items);
      } else {
        const { data } = await client.graphql({
          query: notificationsByMenteeID,
          variables: {
            menteeID: user.menteeId,
          },
        });
        setNotifications(data.notificationsByMenteeID.items);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="container py-8">
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center text-muted-foreground text-sm">
              No notifications found
            </div>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id}>
            <CardHeader className="">
              <CardTitle className="text-sm">{notification.title}</CardTitle>
              <CardDescription className="text-xs">
               ({formatDistanceToNow(new Date(notification.createdAt))} ago)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{notification.body}</p>
            </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
