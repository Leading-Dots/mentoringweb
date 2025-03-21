import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { showToast } from "@/lib/toast";
import { SearchLoader } from "@/components/search/SearchLoader";
import { MentorServices } from "@/API";
import client from "@/lib/apiClient";
import { mentorServicesByMentorID } from "@/graphql/queries";
import { Navigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { deleteMentorServices } from "@/graphql/mutations";
import AddSessionServicesModal from "@/components/preferences/AddSessionServicesModal";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SessionPreferences = () => {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const userRole = user?.role;

  const [sessionServices, setSessionServices] = React.useState<
    MentorServices[]
  >([]);

  if (userRole !== "mentor") {
    return <Navigate to="/home" />;
  }

  const handleDelete = async (id: string) => {
    try {
      await client.graphql({
        query: deleteMentorServices,
        variables: {
          input: {
            id: id,
          },
        },
      });

      showToast("Session service deleted successfully", "success");
      fetchSessionServices();
    } catch (error) {
      console.error("Error deleting session service", error);
      showToast("Error deleting session service", "error");
    }
  };

  const fetchSessionServices = async () => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: mentorServicesByMentorID,
        variables: {
          mentorID: user.mentorId,
        },
      });

      if (data?.mentorServicesByMentorID?.items) {
        setSessionServices(data.mentorServicesByMentorID.items);
        console.log(data.mentorServicesByMentorID.items);
      }
    } catch (error) {
      console.error("Error fetching session services", error);
      showToast("Error fetching session services", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessionServices();
  }, []);

  if (loading) {
    return <SearchLoader />;
  }
  if(sessionServices.length === 0) {
    return (
      <div className="container max-w-2xl p-4 space-y-4">
        <Alert variant="default" className="bg-primary/10 border-primary text-primary">
          <AlertTitle className="text-lg font-semibold">Session Services</AlertTitle>
          <AlertDescription className="text-primary/90">
            You can add session services (free or paid). These will be visible to mentees when they book sessions.
          </AlertDescription>
        </Alert>
        <AddSessionServicesModal onConfirm={fetchSessionServices}>
          <Button variant="outline">
            <Plus className="h-5 w-5 " />
            Add Session Service
          </Button>
        </AddSessionServicesModal>


        <Card className="p-4">
          <CardDescription className="text-lg text-center">
            You have not added any session services yet.
          </CardDescription>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl p-4 space-y-4">
      <Alert variant="default" className="bg-primary/10 border-primary text-primary">
        <AlertTitle className="text-lg font-semibold">Session Services</AlertTitle>
        <AlertDescription className="text-primary/90">
          You can add session services (free or paid). These will be visible to mentees when they book sessions.
        </AlertDescription>
      </Alert>

      <AddSessionServicesModal onConfirm={fetchSessionServices}>
        <Button variant="outline">
          <Plus className="h-5 w-5 " />
          Add Session Service
        </Button>
      </AddSessionServicesModal>
      <div className="space-y-4">
        {sessionServices.map((service) => (
          <Card key={service.id} className="">
            <CardHeader className="flex flex-row justify-between items-start">
              <div className="flex flex-col space-y-2">
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-md">
                  {service.description}
                </CardDescription>
              </div>

              <div className="flex gap-2">
                <AddSessionServicesModal
                  existingService={service}
                  onConfirm={fetchSessionServices}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-muted-foreground/90"
                  >
                    <Pencil className="h-5 w-5" />
                  </Button>
                </AddSessionServicesModal>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(service.id)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="">
              <p className="font-medium">
                {service.isPaid ? `Cost: $${service.cost}` : "Free"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SessionPreferences;
