import { Link, Navigate, useParams } from "react-router-dom";
import { Mentee, Session } from "@/API";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/dbActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";
import { 
  Briefcase, 
  MessageCircle, 
  GraduationCap, 
  Target, 
  Mail,
  Calendar 
} from "lucide-react";
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

  const isCurrentUser = user?.menteeId === params.id || user?.mentorId === params.id;

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
      setError(error instanceof Error ? error.message : "Failed to load profile");
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
              { menteeID: { eq: params.id } },
              { mentorID: { eq: userId } },
            ],
          },
        },
      });
      if (data.listSessions?.items.length > 0) {
        setCurrentMeeting(data.listSessions.items[0]);
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
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Avatar className="h-32 w-32 ring-4 ring-gray-50">
                <AvatarImage src={mentee.profilePictureUrl || ""} />
                <AvatarFallback className="text-2xl">
                  {getInitials(mentee.firstName, mentee.lastName)}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {mentee.firstName} {mentee.lastName}
                </h1>
                <div className="flex items-center gap-3 mt-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{mentee.email}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {mentee.bio}
              </p>

              <div className="flex gap-4 pt-2">
                <Link to={`/chat/${mentee.menteeId}`}>
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </Button>
                </Link>
                {currentMeeting ? (
                  <Link to={`/sessions/${currentMeeting.id}`}>
                    <Button className="gap-2">
                      <Calendar className="w-4 h-4" />
                      View Current Session
                    </Button>
                  </Link>
                ) : (
                  <CreateSessionRequestModal otherUserId={mentee.menteeId!!}>
                    <Button disabled={isCurrentUser} className="gap-2">
                      <Calendar className="w-4 h-4" />
                      Book a Session
                    </Button>
                  </CreateSessionRequestModal>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Key Information */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Learning Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(mentee.goals ?? []).map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Preferred Mentor Experience
                    </h3>
                    <p className="text-gray-600">
                      {mentee.preferredMentorExperience} years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Additional Info */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to={`/chat/${mentee.menteeId}`} className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </Button>
                </Link>
                {currentMeeting ? (
                  <Link to={`/sessions/${currentMeeting.id}`} className="block">
                    <Button className="w-full justify-start gap-2">
                      <Calendar className="w-4 h-4" />
                      View Session
                    </Button>
                  </Link>
                ) : (
                  <CreateSessionRequestModal otherUserId={mentee.menteeId!!}>
                    <Button
                      disabled={isCurrentUser}
                      className="w-full justify-start gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule Session
                    </Button>
                  </CreateSessionRequestModal>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfilePage;