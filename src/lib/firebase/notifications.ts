import { getToken, onMessage } from "firebase/messaging";
import { cloudMessaging, firebaseConfig } from "./app";

export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.,");
      const registration = await navigator.serviceWorker.register(
        firebaseMessagingUrl()
      );
      const token = await getToken(cloudMessaging, {
        vapidKey: import.meta.env.VITE_REACT_APP_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration: registration,
      });

      if(token) {
        localStorage.setItem("fcm_token", token);
      }
      return token;
    }
    throw new Error("Notification permission denied");
  } catch (error) {
    console.error("Error requesting FCM token:", error);
    throw error;
  }
};

export const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error("Error requesting permission:", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(cloudMessaging, (payload) => {
      console.log("Message received. ", payload);
      resolve(payload);
    });
  });

export function firebaseMessagingUrl() {
  let url = "/firebase-messaging-sw.js"; // or any other file name you want

  // Append the params
  Object.entries(firebaseConfig).forEach(([key, value], index) => {
    url += `${index === 0 ? "?" : "&"}${key}=${value}`;
  });

  return url;
}
