import "@aws-amplify/ui-react/styles.css";

import { RouterProvider } from "react-router-dom";
import router from "./navigation/routes";
import { AuthProvider } from "./hooks/useAuth";
import { useEffect } from "react";
import { requestFCMToken } from "./lib/firebase/notifications";
import { onMessage } from "firebase/messaging";
import { cloudMessaging } from "./lib/firebase/app";
import { showToast } from "./lib/toast";

export default function App() {

  
  useEffect(() => {
    requestFCMToken();
    onMessage(cloudMessaging, (payload) => {
      const notificationTitle = payload.notification.title;
      const notificationBody = payload.notification.body;

      showToast(notificationTitle, "info", notificationBody);
    });



  }, []);
  return (
    <AuthProvider>
      
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
