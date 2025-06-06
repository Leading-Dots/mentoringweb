import { Mentor, MentorServices, Mentorship, Review, Session } from "@/API";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  checkMentorship,
  getUser,
  getUserReviews,
  intiateChat,
} from "@/lib/dbActions";
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
  DollarSign,
  MessageCircle,
  Mail,
  Calendar,
  GraduationCap,
  Target,
  CalendarPlus,
} from "lucide-react";
import { PublicProfileLoader } from "./PublicProfileLoader";
import { useAuth } from "@/hooks/useAuth";
import { listSessions, mentorServicesByMentorID } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { showToast } from "@/lib/toast";
import ReviewCard from "@/components/common/ReviewCard";
import { ProfileActions } from "@/components/common/ProfileAction";
import ContactCard from "@/components/profile/contact-card";

const MentorProfilePage = () => {
  const params = useParams();
  const router = useNavigate();
  const [mentor, setMentor] = useState<Mentor>({} as Mentor);
  const [currentMentorship, setCurrentMentorship] = useState<Mentorship | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMeeting, setCurrentMeeting] = useState<Session | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  const isCurrentUser =
    user && (user?.menteeId === params.id || user?.mentorId === params.id);
  const isGuest = !user;

  //guard the page from other mentors
  if (user?.role === "mentor" && user?.mentorId !== params.id) {
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

  const fetchSessionServices = async () => {
    try {
      const { data } = await client.graphql({
        query: mentorServicesByMentorID,
        variables: {
          mentorID: params.id,
        },
      });
      if (data) {
        setServices(data.mentorServicesByMentorID.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchMentorProfile();
      verifyMentorship();
      fetchReviews(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      fetchSessionServices();
    }
  }, []);
  const handleChat = async () => {
    try {
      if (!user) return showToast("Login to start a chat", "error");
      const chatId = await intiateChat({
        mentorId: mentor.mentorId as string,
        menteeId:
          user?.role === "mentee" ? user?.menteeId : (user?.mentorId as string),
        mentorName: `${mentor.firstName} ${mentor.lastName}`,
        menteeName: `${user?.firstName} ${user?.lastName}`,
      });

      console.log(chatId);

      if (!chatId) return;

      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyMentorship = async () => {
    try {
      const mentorship = await checkMentorship(params.id!, user?.menteeId!);
      console.log("Mentorship:", mentorship);
      setCurrentMentorship(mentorship || null);
    } catch (error) {
      console.error(error);
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
    <div className="min-h-screen">
      <div className="container max-w-4xl">
        {/* Profile Header */}
        <div className="rounded-xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex-shrink-0 ">
              <Avatar className="h-32 w-32  ">
                <AvatarImage src={mentor.profilePictureUrl || ""} />
                <AvatarFallback className="text-2xl">
                  {getInitials(mentor.firstName, mentor.lastName)}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-3xl font-bold ">
                  {mentor.firstName} {mentor.lastName}
                </h1>
              </div>

              <p className=" text-lg leading-relaxed">{mentor.bio}</p>

              <Badge variant="secondary">
                {mentor.availability ? (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Available in: {mentor.availability}</span>
                  </div>
                ) : (
                  "Availability not set"
                )}
              </Badge>
              {!isGuest && <ContactCard user={mentor} />}

              {!isCurrentUser && (
                <>
                  <ProfileActions
                    currentMentorship={currentMentorship}
                    userId={mentor.mentorId!!}
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
                  <Briefcase className="w-5 h-5 " />
                  <div>
                    <h3 className="font-medium ">Years of Experience</h3>
                    <p className="">{mentor.yearsOfExperience} years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 " />
                  <div>
                    <h3 className="font-medium ">Hourly Rate</h3>
                    <p className="">₹{mentor.hourlyRate}/hour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
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
        {services.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarPlus className="w-5 h-5 text-primary" />
                Available Services
              </CardTitle>
              <CardDescription>Services offered by the mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service: MentorServices, index) => (
                  <Card key={index} className="mb-4 max-w-sm">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">{service.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">
                          ₹{service.cost}
                        </span>
                        <span className="text-sm">
                          {service.duration}{" "}
                          {service.duration === "1" ? "Month" : "Months"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MentorProfilePage;
