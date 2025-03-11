import { Mentor, Mentee, Session, Review } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddReviewModal from "../modal/AddReviewModal";
import { UserRole } from "types";
import { getSessionReview } from "@/lib/dbActions";
import { showToast } from "@/lib/toast";
import { intiateChat } from "@/lib/dbActions";

interface SessionParticipantsCardProps {
  mentor: Mentor | null;
  mentee: Mentee | null;
  session: Session;
  onConfirm: () => Promise<void>;
}

const SessionParticipantsCard = ({
  mentor,
  mentee,
  session,
  onConfirm,
}: SessionParticipantsCardProps) => {
  const { user } = useAuth();
  const router = useNavigate();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(false);

  const userRole = user?.role;

  const handleReviewClick = () => {
    console.log("Review Clicked");

    setReviewModalOpen(true);
  };

  const handleChat = async () => {
    try {
      if (!user) return showToast("Login to start a chat", "error");
      const chatId = await intiateChat({
        menteeId: mentee.menteeId!,
        mentorId: user?.role === "mentor" ? user?.mentorId : user?.menteeId,
        menteeName: `${mentee.firstName} ${mentee.lastName}`,
        mentorName: `${user?.firstName} ${user?.lastName}`,
      });

      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const reviewData = await getSessionReview(session.id, userRole);
      if (reviewData) {
        setReview(reviewData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [session.id, userRole]);

  if (loading) return <div>Loading...</div>;

  return (
    console.log("mentor", mentor),
    console.log("mentee", mentee),
    (
      <>
        <AddReviewModal
          open={reviewModalOpen}
          setOpen={setReviewModalOpen}
          session={session}
          existingReview={review}
          onConfirm={onConfirm}
        />
        <div className="flex flex-col gap-2 p-4 rounded-lg border bg-card">
          {mentor && (
            <div className="flex items-center justify-between gap-2">
              <Link to={`/mentor/${mentor.mentorId}`}>
                <div className="flex items-center gap-3">
                  <Avatar className="size-12 cursor-pointer hover:opacity-80 ring-2 ring-primary/10">
                    <AvatarImage
                      src={mentor?.profilePictureUrl!!}
                      alt={mentor?.firstName!!}
                    />
                    <AvatarFallback className="bg-primary/10">
                      {getInitials(mentor?.firstName, mentor?.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {mentor?.firstName} {mentor?.lastName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Mentor
                    </span>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                {userRole === "mentee" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={handleChat}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Chat
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReviewClick}
                    >
                      {review ? "See Review" : "Leave a Review"}
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
          {mentee && (
            <div className="flex items-center justify-between gap-2">
              <Link to={`/mentee/${mentee.menteeId}`}>
                <div className="flex items-center gap-3">
                  <Avatar className="size-12 cursor-pointer hover:opacity-80 ring-2 ring-primary/10">
                    <AvatarImage
                      src={mentee?.profilePictureUrl!!}
                      alt={mentee?.firstName!!}
                    />
                    <AvatarFallback className="bg-primary/10">
                      {getInitials(mentee?.firstName, mentee?.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {mentee?.firstName} {mentee?.lastName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Mentee
                    </span>
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={handleChat}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Chat
                </Button>
                {userRole === "mentor" && (
                  <Button variant="ghost" size="sm" onClick={handleReviewClick}>
                    {review ? "See Review" : "Leave a Review"}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default SessionParticipantsCard;
