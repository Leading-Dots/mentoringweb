import { ChatRoom } from "@/API";
import { chatRoomsByMenteeID, chatRoomsByMentorID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, MessageCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const InboxPage = () => {
  const { user } = useAuth();
  const userRole = user?.role;

  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchChatRoomsByUser = async () => {
    try {
      setLoading(true);
      if (userRole === "mentor") {
        const { data } = await client.graphql({
          query: chatRoomsByMentorID,
          variables: {
            mentorID: user.mentorId,
          },
        });
        if (data) {
          setChatRooms(data.chatRoomsByMentorID.items);
        }
      } else {
        const { data } = await client.graphql({
          query: chatRoomsByMenteeID,
          variables: {
            menteeID: user.menteeId,
          },
        });
        if (data) {
          setChatRooms(data.chatRoomsByMenteeID.items);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatRoomsByUser();
  }, []);
  return (
    <div>
      <div className="container py-10 max-w-3xl">
        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            {chatRooms.map((room) => (
              <Link to={`/chat/${room.id}`} key={room.id}>
                <Card
                  key={room.id}
                  className="hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex items-start p-6">
                    <MessageCircle className="h-6 w-6 text-primary shrink-0 mr-4" />
                    <div className="flex-1">
                      <CardHeader className="p-0">
                        <CardTitle className="text-lg font-semibold">
                          {room.name}
                        </CardTitle>
                        <CardDescription>wiwiwiw</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 mt-2">
                        <p className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(room.createdAt), {
                            addSuffix: true,
                          })}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {chatRooms.length === 0 && (
              <div className="flex flex-col items-center text-muted-foreground p-8">
                <MessageCircle className="h-12 w-12 mb-4" />
                <p>No chat rooms found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxPage;
