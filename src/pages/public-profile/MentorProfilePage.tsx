import { Mentor, Session } from "@/API";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "@/lib/dbActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";
import { 
  Briefcase, 
  DollarSign, 
  MessageCircle, 
  Mail, 
  Calendar,
  GraduationCap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";
import { PublicProfileLoader } from "./PublicProfileLoader";
import { useAuth } from "@/hooks/useAuth";
import { listSessions } from "@/graphql/queries";
import client from "@/lib/apiClient";

const MentorProfilePage = () => {
  const params = useParams();
  const [mentor, setMentor] = useState<Mentor>({} as Mentor);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMeeting, setCurrentMeeting] = useState<Session | null>(null);
  const { user } = useAuth();

  const isCurrentUser = user?.menteeId === params.id || user?.mentorId === params.id;

  useEffect(() => {
    if (params.id) {
      fetchMentorProfile();
      checkSession();
    }
  }, [params.id]);

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
                  eq: userId,
                },
              },
              {
                mentorID: {
                  eq: params.id,
                },
              },
            ],
          },
        },
      });
      if (data.listSessions?.items.length > 0) {
        setCurrentMeeting(data!.listSessions!.items[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMentorProfile = async () => {
    try {
      const data = await getUser(params.id!, "mentor");
      if (!data) {
        throw new Error("Mentor not found");
      }
      setMentor(data as Mentor);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to load profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PublicProfileLoader />;
  }

  if (error || !mentor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">{error || "Mentor not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Avatar className="h-32 w-32 ring-4 ring-gray-50">
                <AvatarImage src={mentor.profilePictureUrl || ""} />
                <AvatarFallback className="text-2xl">
                  {getInitials(mentor.firstName, mentor.lastName)}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {mentor.firstName} {mentor.lastName}
                </h1>
                <div className="flex items-center gap-3 mt-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{mentor.email}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {mentor.bio}
              </p>

              <div className="flex gap-4 pt-2">
                <Link to={`/chat/${mentor.mentorId}`}>
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
                  <CreateSessionRequestModal otherUserId={mentor.mentorId!!}>
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
                  Areas of Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(mentor.expertise ?? []).map((skill, index) => (
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
                  Professional Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Years of Experience
                    </h3>
                    <p className="text-gray-600">
                      {mentor.yearsOfExperience} years
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Hourly Rate
                    </h3>
                    <p className="text-gray-600">
                      ₹{mentor.hourlyRate}/hour
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to={`/chat/${mentor.mentorId}`} className="block">
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
                  <CreateSessionRequestModal otherUserId={mentor.mentorId!!}>
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

export default MentorProfilePage;