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
import { deleteNotification } from "@/graphql/mutations";
import { Button } from "@/components/ui/button";
import NotificationLoaderSkeleton from "@/components/notification/NotificationLoaderSkeleton";
import { useNotifications } from "@/context/notificationStore";

const NotificationsPage = () => {
  const {notifications, setNotifications, fetchNotifications, setNotificationCount} = useNotifications();
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth();

  const userRole = user?.role;
  


  


  useEffect(() => {
    fetchNotifications();
  }, []);



  if(loading) {
    return <NotificationLoaderSkeleton />
  }

  const clearAllNotifications = async () => {
    setLoading(true);
    try {
      const deletePromises = notifications.map((notification) =>
        client.graphql({
          query: deleteNotification,
          variables: {
            input: {
              id: notification.id,
            }
          },
        })
      );

      await Promise.all(deletePromises);
      setNotifications([]);
      setNotificationCount(0);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-8 max-w-3xl">
     
        <div className="space-y-4">

           
            <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium mb-4">
              You have {notifications.length} notification{notifications.length !== 1 ? 's' : ''}
            </div>
            <Button
              variant="destructive"
              disabled={loading || notifications.length === 0}
              onClick={clearAllNotifications}
              className=""
            >
              Clear All
            </Button>
            </div>



          {notifications.length === 0 ? (
            <div className="text-center text-muted-foreground text-md">
              No notifications found
            </div>
          ) : (

         


            notifications.map((notification) => (
              <Card key={notification.id}>
                <CardHeader className="">
                  <CardTitle className="text-md">
                    {notification.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    ({formatDistanceToNow(new Date(notification.createdAt))}{" "}
                    ago)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.body}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      
    </div>
  );
};

export default NotificationsPage;
