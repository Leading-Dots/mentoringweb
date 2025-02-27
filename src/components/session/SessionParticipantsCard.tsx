import { Mentor, Mentee, Session, Review } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddReviewModal from "../modal/AddReviewModal";
import { UserRole } from "types";
import { reviewsBySessionID } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { getSessionReview } from "@/lib/dbActions";
import { showToast } from "@/lib/toast";

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
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(false);

  const userRole = user?.role;

  const handleReviewClick = () => {
    console.log("Review Clicked");

   setReviewModalOpen(true);
  }

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




  if(loading) return <div>Loading...</div>

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
        <div className="flex flex-col gap-2">
          {mentor && (
            <div className="flex items-center gap-2">
              <Link to={`/mentor/${mentor.mentorId}`}>
                <div className="flex items-center gap-2">
                  <Avatar className="size-10 cursor-pointer hover:opacity-80">
                    <AvatarImage
                      src={mentor?.profilePictureUrl!!}
                      alt={mentor?.firstName!!}
                    />
                    <AvatarFallback>
                      {getInitials(mentor?.firstName, mentor?.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">
                    {mentor?.firstName} {mentor?.lastName}
                  </span>
                </div>
              </Link>
              {userRole === "mentee" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2"
                  onClick={handleReviewClick}
                >
                  {review ? "See Review" : "Leave a Review"}
                </Button>
              )}
            </div>
          )}
          {mentee && (
            <div className="flex items-center gap-2">
              <Link to={`/mentee/${mentee.menteeId}`}>
                <div className="flex items-center gap-2">
                  <Avatar className="size-10 cursor-pointer hover:opacity-80">
                    <AvatarImage
                      src={mentee?.profilePictureUrl!!}
                      alt={mentee?.firstName!!}
                    />
                    <AvatarFallback>
                      {getInitials(mentee?.firstName, mentee?.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">
                    {mentee?.firstName} {mentee?.lastName}
                  </span>
                </div>
              </Link>
              {userRole === "mentor" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2"
                  onClick={handleReviewClick}
                >
                  {review ? "See Review" : "Leave a Review"}
                </Button>
              )}
            </div>
          )}
        </div>
      </>
    )
  );
};

export default SessionParticipantsCard;
