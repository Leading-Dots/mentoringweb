import "@aws-amplify/ui-react/styles.css";

import { RouterProvider } from "react-router-dom";
import router from "./navigation/routes";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
