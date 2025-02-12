import { Link, Navigate, useParams } from "react-router-dom";
import { Mentee, Session } from "@/API";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/dbActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";
import { Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";
import { PublicProfileLoader } from "./PublicProfileLoader";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { listSessions } from "@/graphql/queries";

const MenteeProfilePage = () => {
  const params = useParams();
  const { user } = useAuth();
  const [mentee, setMentee] = useState<Mentee>({} as Mentee);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMeeting, setCurrentMeeting] = useState<Session | null>(null);

  console.log(params);

  const isCurrentUser =
    user?.menteeId === params.id || user?.mentorId === params.id;
  console.log(isCurrentUser);

  useEffect(() => {
    if (params.id) {
      fetchMenteeProfile();
      checkSession();
    }
  }, [params.id]);

  const fetchMenteeProfile = async () => {
    try {
      const data = await getUser(params.id!, "mentee");
      if (!data) {
        throw new Error("Mentee not found");
      }
      setMentee(data as Mentee);
      setLoading(false);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to load profile"
      );
      setLoading(false);
    }
  };

  const checkSession = async () => {
    try {
      const userId = user?.role === "mentee" ? user?.menteeId : user?.mentorId;
      const { data } = await client.graphql({
        query: listSessions,
        variables: {
          filter: {
            and: [
              {
                menteeID: {
                  eq: params.id,
                },
              },
              {
                mentorID: {
                  eq: userId,
                },
              },
            ],
          },
        },
      });
      if (data.listSessions?.items.length > 0) {
        console.error(data.listSessions.items[0]);
        setCurrentMeeting(data!.listSessions!.items[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!params.id) {
    return <Navigate to="/404" replace />;
  }

  if (loading) {
    return <PublicProfileLoader />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (!mentee) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container p-4 max-w-4xl">
      {/* Profile Header with Bio */}
      <div className="flex items-start space-x-6 mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src={mentee.profilePictureUrl || ""} />
          <AvatarFallback>
            {getInitials(mentee.firstName, mentee.lastName)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">
            {mentee.firstName} {mentee.lastName}
          </h1>
          <p className="text-gray-600 mt-2 text-base leading-relaxed max-w-2xl">
            {mentee.bio}
          </p>
        </div>

        {/* contact details */}

        <div className="flex items-center gap-4">
          <Link
            to={`/chat/${mentee.menteeId}`}
            className="flex items-center gap-1 text-primary"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{mentee.email}</span>
          </Link>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Key Information Section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium mb-1">
                    Preferred Year of Experience
                  </h3>
                  <p className="text-gray-700">
                    {mentee.preferredMentorExperience} years
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Expertise Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Wants to learn</h2>
        <div className="flex flex-wrap gap-2">
          {(mentee.goals ?? []).map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm py-1 px-3"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="flex justify-center my-12">
        {currentMeeting ? (

          <Link to={`/sessions/${currentMeeting.id}`} className="w-full">
            <Button size="lg" className="flex items-center w-full font-semibold hover:scale-105 transition-transform">
              View Current Session
            </Button>
          </Link>
        ) : (
          <CreateSessionRequestModal otherUserId={mentee.menteeId!!}>
            <Button
              disabled={isCurrentUser}
              size="lg"
              className="flex items-center w-full font-semibold hover:scale-105 transition-transform "
            >
              Book a Session
            </Button>
          </CreateSessionRequestModal>
        )}
      </section>
    </div>
  );
};

export default MenteeProfilePage;
