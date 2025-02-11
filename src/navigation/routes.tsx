import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/root/Home";
import { createBrowserRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import SignUpPage from "@/pages/auth/SignUpPage";
import ConfirmSignUpPage from "@/pages/auth/ConfirmSignUpPage";
import ProfilePage from "@/pages/root/ProfilePage";
import CreateSessionRequestPage from "@/pages/root/CreateSessionRequestPage";
import MentorProfilePage from "@/pages/public-profile/MentorProfilePage";
import MenteeProfilePage from "@/pages/public-profile/MenteeProfilePage";
import SearchPage from "@/pages/root/SearchPage";
import SessionsPage from "@/pages/root/SessionsPage";
import SessionDetailsPage from "@/pages/root/SessionDetailsPage";

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
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: "/confirm-signup",
    element: (
      <AuthLayout>
        <ConfirmSignUpPage />
      </AuthLayout>
    ),
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
    path: "/profile",
    element: (
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/sessionRequest",
    element: (
      <DashboardLayout>
        <CreateSessionRequestPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/mentor/:id",
    element: (
      <DashboardLayout>
        <MentorProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/mentee/:id",
    element: (
      <DashboardLayout>
        <MenteeProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/search-mentors",
    element: (
      <DashboardLayout>
        <SearchPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/sessions",
    element: (
      <DashboardLayout>
        <SessionsPage />
      </DashboardLayout>
    ),
  },
  {
    path : "/sessions/:id",
    element : (
      <DashboardLayout>
        <SessionDetailsPage />
      </DashboardLayout>
    )
  }

];

const router = createBrowserRouter(routes);

export default router;
