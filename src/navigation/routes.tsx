import Home from "@/pages/root/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import ConfirmSignUpPage from "@/pages/auth/ConfirmSignUpPage";
import ProfilePage from "@/pages/root/ProfilePage";
import MentorProfilePage from "@/pages/public-profile/MentorProfilePage";
import MenteeProfilePage from "@/pages/public-profile/MenteeProfilePage";
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
import MenteeLoginPage from "@/pages/auth/MenteeLoginPage";
import MentorLoginPage from "@/pages/auth/MentorLoginPage";
import MentorSignUpPage from "@/pages/auth/MentorSignUpPage";
import MenteeSignUpPage from "@/pages/auth/MenteeSignUpPage";
import AdminLayout from "@/layout/AdminLayout";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminLoginPage from "@/pages/admin/AdminLoginPage";

const routes = [
  {
    path: "/",
    element: <HomeRouter />,
  },
  {
    path: "/login/mentor",
    element: (
      <AuthLayout>
        <MentorLoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/admin/login",
    element: (
    
        <AdminLoginPage />
     
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminLayout>
        <AdminDashboardPage />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/mentors",
    element: (
      <AdminLayout>
        <AdminDashboardPage />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/mentees",
    element: (
      <AdminLayout>
        <AdminDashboardPage />
      </AdminLayout>
    ),
  },
  {
    path: "/login/",
    element: (
      <AuthLayout>
        <Navigate to="/login/mentee" />
      </AuthLayout>
    ),
  },
  {
    path: "/login/mentee",
    element: (
      <AuthLayout>
        <MenteeLoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/signup/",
    element: (
      <AuthLayout>
        <Navigate to="/signup/mentee" />
      </AuthLayout>
    ),
  },
  {
    path: "/signup/mentor",
    element: (
      <AuthLayout>
        <MentorSignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: "/signup/mentee",
    element: (
      <AuthLayout>
        <MenteeSignUpPage />
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
