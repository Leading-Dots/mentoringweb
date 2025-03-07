import client from "../apiClient";
import { createNotification } from "@/graphql/mutations";
import { UserRole } from "types";
import { getUser } from "../dbActions";
import axios from "axios";

interface NotificationPayload {
  title: string;
  body: string;
  recipientId: string;
  recipientRole: UserRole;
}

export const getFCMToken = async (userId: string, role: UserRole) => {
  const userData = await getUser(userId, role);
  console.log("getting fcm toke here" , userData);
  return userData?.firebaseToken;
};

export const sendNotification = async ({
  title,
  body,
  recipientId,
  recipientRole
}: NotificationPayload) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_SEND_NOTIFICATION_API;
  console.log("title", title);
  console.log("body", body);
  console.log("recipientId", recipientId);
  console.log("recipientRole", recipientRole);

  try {
    const fcmToken = await getFCMToken(recipientId, recipientRole);
    const response = await axios.post(
      apiUrl,
      {
        title,
        body,
        token: fcmToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    console.log("Notification sent successfully:", response);

    if (response.status !== 200) {
      throw new Error("Failed to send notification");
    }

    //create in notification table

    const notification = await client.graphql({
      query: createNotification,
      variables: {
        input: {
          title,
          body,
          fcmToken,
          menteeID: recipientRole === "mentee" ? recipientId : null,
          mentorID: recipientRole === "mentor" ? recipientId : null,
          isSent: true,
        },
      },
    });

    return response;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
};
