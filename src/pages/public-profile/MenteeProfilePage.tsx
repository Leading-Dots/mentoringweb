import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Mentee, Mentorship, Review, Session } from "@/API";
import { useEffect, useState } from "react";
import { checkMentorship, getUser, getUserReviews, intiateChat } from "@/lib/dbActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";
import {
  Briefcase,
  MessageCircle,
  GraduationCap,
  Target,
  Mail,
  Calendar,
  CalendarPlus,
  File,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";
import { PublicProfileLoader } from "./PublicProfileLoader";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { listSessions } from "@/graphql/queries";
import { UserRole } from "types";
import { showToast } from "@/lib/toast";
import ReviewCard from "@/components/common/ReviewCard";
import { ProfileActions } from "@/components/common/ProfileAction";
import ContactCard from "@/components/profile/contact-card";

const MenteeProfilePage = () => {
  const params = useParams();
  const { user } = useAuth();
  const [mentee, setMentee] = useState<Mentee>({} as Mentee);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMeeting, setCurrentMeeting] = useState<Session | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentMentorship, setCurrentMentorship] = useState<Mentorship | null>(
    null
  );
  const router = useNavigate();

  const isCurrentUser =
    (user && user?.menteeId === params.id) || user?.mentorId === params.id;
  console.log("isCurrentUser", isCurrentUser);
  const isGuest = !user;


  if (user?.role === "mentee" && user?.menteeId !== params.id) {
    router("/home");
  }

  const fetchReviews = async (userId: string) => {
    try {
      const data = await getUserReviews(userId);
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };
  const verifyMentorship = async () => {
      try {
        const mentorship = await checkMentorship(user?.mentorId!, params.id!);
        setCurrentMentorship(mentorship || null);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    if (params.id) {
      fetchMenteeProfile();
      verifyMentorship();
      fetchReviews(params.id);
    }
  }, [params.id]);

  const handleChat = async () => {
    try {
      if (!user) return showToast("Login to start a chat", "error");
      const chatId = await intiateChat({
        menteeId: mentee.menteeId!,
        mentorId: user?.role === "mentor" ? user?.mentorId : user?.menteeId,
        menteeName: `${mentee.firstName} ${mentee.lastName}`,
        mentorName: `${user?.firstName} ${user?.lastName}`,
      });

      if (!chatId) return;
      console.log(chatId);
      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
    }
  };

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
      if (!user) return;
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
    <div className="min-h-screen">
      <div className="container max-w-4xl">
        {/* Profile Header */}
        <div className=" rounded-xl shadow-sm p-8 mb-6">
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Avatar className="h-20 w-20">
                <AvatarImage src={mentee.profilePictureUrl || ""} />
                <AvatarFallback className="text-2xl">
                  {getInitials(mentee.firstName, mentee.lastName)}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-3xl font-bold ">
                  {mentee.firstName} {mentee.lastName}
                </h1>
               
              </div>
               
              <p className=" text-lg leading-relaxed">{mentee.bio}</p>

             
              {!isGuest && <ContactCard user={mentee} />}

              {!isCurrentUser && (
                <>
                <ProfileActions
                  currentMentorship={currentMentorship}
                  userId={mentee.menteeId!!}
                  isCurrentUser={isCurrentUser}
                  isGuest={isGuest}
                  onChatClick={handleChat}
                />
                </>
              )}
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
                  {(mentee.topics ?? []).map((skill, index) => (
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
                  <Briefcase className="w-5 h-5 " />
                  <div>
                    <h3 className="font-medium ">
                      Preferred Mentor Experience
                    </h3>
                    <p className="">{mentee.preferredMentorExperience} years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Reviews */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
                <CardDescription>
                  <ReviewCard reviews={reviews} />
                </CardDescription>
              </CardHeader>
              <CardContent>
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b pb-4 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`size-8 ${
                                    i < parseInt(review.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No reviews yet
                  </p>
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
