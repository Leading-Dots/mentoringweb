import { Mentor, Mentee, Session, Review } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddReviewModal from "../modal/AddReviewModal";
import { UserRole } from "types";
import { getSessionReviews } from "@/lib/dbActions";
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
  const [mentorReview, setMentorReview] = useState<Review | null>(null);
  const [menteeReview, setMenteeReview] = useState<Review | null>(null);
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

      if (!chatId) return;

      router(`/chat/${chatId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const reviewData = await getSessionReviews(session.id!!);
      console.log("reviewData", reviewData);
      if (reviewData) {
        const reviewByMentor = reviewData.find(
          (review) => review.reviewerRole === "mentor"
        );
        const reviewByMentee = reviewData.find(
          (review) => review.reviewerRole === "mentee"
        ); 

        console.log("reviewByMentor", reviewByMentor);
        console.log("reviewByMentee", reviewByMentee);
        setMentorReview(reviewByMentor || null);
        setMenteeReview(reviewByMentee || null);
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
          existingReview={userRole === "mentor" ? mentorReview : menteeReview}
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
                      variant="ghost"
                      size="sm"
                      onClick={handleReviewClick}
                    >
                      {menteeReview ? "See Review" : "Leave a Review"}
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
                {userRole === "mentor" && (
                  <Button variant="ghost" size="sm" onClick={handleReviewClick}>
                    {mentorReview ? "See Review" : "Leave a Review"}
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
