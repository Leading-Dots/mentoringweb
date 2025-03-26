import { MentorServices } from "@/API";
import { mentorServicesByMentorID } from "@/graphql/queries";
import client from "@/lib/apiClient";
import { showToast } from "@/lib/toast";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DollarSign } from "lucide-react";
import ListLoader from "../common/ListLoader";

interface SessionServiceSelectorProps {
  mentorId: string;
  onSelect: (service: MentorServices) => void;
}

const SessionServiceSelector = ({
  mentorId,
  onSelect,
}: SessionServiceSelectorProps) => {
  const [currentService, setCurrentService] =
    React.useState<MentorServices | null>(null);
  const [services, setServices] = React.useState<MentorServices[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchServiceByMentor = async () => {
    try {
      const { data } = await client.graphql({
        query: mentorServicesByMentorID,
        variables: {
          mentorID: mentorId,
        },
      });

      if (data?.mentorServicesByMentorID?.items) {
        setServices(data.mentorServicesByMentorID.items);
        console.log(data.mentorServicesByMentorID.items);
      }
    } catch (error) {
      console.error("Error fetching session services", error);
      showToast("Error fetching session services", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (service: MentorServices) => {
    setCurrentService(service);
    onSelect(service);
  };

  useEffect(() => {
    fetchServiceByMentor();
  }, []);


  if(loading) {
    return <ListLoader />;
  }

  return (
    <div>
      {services.map((service) => (
        <Card
          key={service.id}
          className={`mb-4 max-w-sm cursor-pointer transition-all hover:shadow-md active:scale-98 ${
            currentService?.id === service.id
              ? "border-2 border-primary bg-primary/5 hover:border-2 hover:border-primary"
              : ""
          }`}
          onClick={() => handleSelect(service)}
        >
          <CardHeader className="p-4">
            <CardTitle className="text-sm">{service.title}</CardTitle>
            <CardDescription className="text-xs">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center text-sm font-medium">
                {service.isPaid ? (
                  <div className="flex items-center gap-1">
                    <span>₹{service.cost}</span>
                  </div>
                ) : (
                  <span className="text-green-500">Free</span>
                )}
              </span>
              <div className="text-sm text-muted-foreground">
                {service.duration === "1"
                  ? "1 month"
                  : `${service.duration} months`}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SessionServiceSelector;
