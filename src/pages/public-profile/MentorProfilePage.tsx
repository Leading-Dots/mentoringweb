import { Mentor } from "@/API";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getUser } from "@/lib/dbActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";
import { Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateSessionRequestModal } from "@/components/modal/CreateSessionRequestModal";

const MentorProfilePage = () => {
  const params = useParams();
  const [mentor, setMentor] = useState<Mentor>({} as Mentor);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchMentorProfile();
    }
  }, [params.id]);

  const fetchMentorProfile = async () => {
    try {
      const data = await getUser(params.id!, "mentor");
      if (!data) {
        throw new Error("Mentor not found");
      }
      setMentor(data as Mentor);
      setLoading(false);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to load profile"
      );
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
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
    <div className="container p-4 max-w-4xl">
      {/* Profile Header with Bio */}
      <div className="flex items-start space-x-6 mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src={mentor.profilePictureUrl || ""} />
          <AvatarFallback>
            {getInitials(mentor.firstName, mentor.lastName)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">
            {mentor.firstName} {mentor.lastName}
          </h1>
          <p className="text-gray-600 mt-2 text-base leading-relaxed max-w-2xl">
            {mentor.bio}
          </p>
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
                  <h3 className="font-medium mb-1">Experience</h3>
                  <p className="text-gray-700">
                    {mentor.yearsOfExperience} years
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium mb-1">Hourly Rate</h3>
                  <p className="text-gray-700">₹{mentor.hourlyRate}/hour</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Expertise Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {(mentor.expertise ?? []).map((skill, index) => (
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
        <CreateSessionRequestModal>
        <Button
          size="lg"
          className="flex items-center w-full font-semibold hover:scale-105 transition-transform"
        >
          Book a Session
        </Button>
        </CreateSessionRequestModal>
      </section>
    </div>
  );
};

export default MentorProfilePage;
