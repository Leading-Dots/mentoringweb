import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/root/Home";
import { createBrowserRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import SignUpPage from "@/pages/auth/SignUpPage";
import ConfirmSignUpPage from "@/pages/auth/ConfirmSignUpPage";
import ProfilePage from "@/pages/root/ProfilePage";
import MentorProfilePage from "@/pages/public-profile/MentorProfilePage";
import MenteeProfilePage from "@/pages/public-profile/MenteeProfilePage";
import SearchPage from "@/pages/root/SearchMentorsPage";
import SessionsPage from "@/pages/root/SessionsPage";
import SessionDetailsPage from "@/pages/root/SessionDetailsPage";
import InboxPage from "@/pages/root/InboxPage";
import ChatPage from "@/pages/root/ChatPage";
import SettingsPage from "@/pages/root/SettingsPage";
import NotificationsPage from "@/pages/root/NotificationsPage";
import SearchMentorPage from "@/pages/root/SearchMentorsPage";
import SearchMenteePage from "@/pages/root/SearchMenteePage";
import MyMentors from "@/pages/root/MyMentorships";
import SessionPreferences from "@/pages/root/SessionServices";

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
      <DashboardLayout isProtected={false}>
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
    path: "/mentor/:id",
    element: (
      <DashboardLayout isProtected={false}>
        <MentorProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/mentee/:id",
    element: (
      <DashboardLayout isProtected={false}>
        <MenteeProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/search-mentors",
    element: (
      <DashboardLayout isProtected={false}>
        <SearchMentorPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/search-mentees",
    element: (
      <DashboardLayout isProtected={false}>
        <SearchMenteePage />
      </DashboardLayout>
    ),
  },
  {
    path: "/mentorships",
    element: (
      <DashboardLayout>
        <MyMentors />
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
    path: "/sessions/:id",
    element: (
      <DashboardLayout>
        <SessionDetailsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/inbox",
    element: (
      <DashboardLayout>
        <InboxPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/chat/:id",
    element: (
      <DashboardLayout>
        <ChatPage />
      </DashboardLayout>
    ),
  },
  {
    path: "settings",
    element: (
      <DashboardLayout>
        <SettingsPage />
      </DashboardLayout>
    ),
  },
  {
    path: "preferences",
    element: (
      <DashboardLayout>
        <SessionPreferences />
      </DashboardLayout>
    ),
  },
  {
    path: "Notifications",
    element: (
      <DashboardLayout>
        <NotificationsPage />
      </DashboardLayout>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
