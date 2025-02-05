import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/root/Home";
import { createBrowserRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import SignUpPage from "@/pages/auth/SignUpPage";
import ConfirmSignUpPage from "@/pages/auth/ConfirmSignUpPage";
import ProfilePage from "@/pages/root/ProfilePage";

const routes = [
  {
    path: "/",
    element: <HomeRouter />,
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path : "/signup",
    element : (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    )
  },
  {
    path : "/confirm-signup",
    element : (
      <AuthLayout>
        <ConfirmSignUpPage />
      </AuthLayout>
    )
  },
  {
    path: "/home",
    element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    ),
  },
  {
    path : "/profile",
    element : (
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    )
  }
];

const router = createBrowserRouter(routes);

export default router;
