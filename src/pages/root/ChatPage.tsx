import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, X, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import client from "@/lib/apiClient";
import { getChatRoom, messagesByChatroomID } from "@/graphql/queries";
import { ChatRoom, Messages } from "@/API";
import { useAuth } from "@/hooks/useAuth";
import { createMessages } from "@/graphql/mutations";
import { getInitials } from "@/lib/utils";
import { onCreateMessages } from "@/graphql/subscriptions";
import { uploadCommentImage } from "@/lib/storage";

const ChatPage = () => {
  const params = useParams();
  const { user } = useAuth();
  const [chatroom, setChatroom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(
    null
  );
  const [isUploading, setIsUploading] = useState(false);

  const currentUserId = user?.role === "mentor" ? user.mentorId : user.menteeId;

  if (!params.id) {
    <Navigate to="/inbox" />;
  }

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);

      const preview = URL.createObjectURL(file);
      setSelectedFilePreview(preview);
    } else {
      alert("Please select an image file");
    }
  };

  const fetchChatData = async () => {
    try {
      const { data } = await client.graphql({
        query: getChatRoom,
        variables: {
          id: params.id!!,
        },
      });

      if (data) {
        setChatroom(data.getChatRoom as ChatRoom);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() && !selectedFile) return;
  
    try {
      setIsUploading(true);
      let url = "";
      if (selectedFile) {
        url = await uploadCommentImage(selectedFile, params.id!!);
      }
  
      await client.graphql({
        query: createMessages,
        variables: {
          input: {
            content: newMessage,
            chatroomID: params.id!!,
            senderId: currentUserId,
            userRole: user.role,
            username: `${user.firstName} ${user.lastName}`,
            timestamp: new Date().toISOString(),
            imageUrl: url || null,
          },
        },
      });
  
      setNewMessage("");
      setSelectedFile(null);
      setSelectedFilePreview(null);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const { data } = await client.graphql({
        query: messagesByChatroomID,
        variables: {
          chatroomID: params.id!!,
        },
      });

      if (data) {
        //sort messages by timestamp
        setMessages(data.messagesByChatroomID.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [params.id]);

  useEffect(() => {
    fetchChatData();

    // Set up subscription for new messages
    const subscription = client
      .graphql({
        query: onCreateMessages,
      })
      .subscribe({
        next: ({ data }) => {
          if (data?.onCreateMessages) {
            setMessages((prevMessages) => [
              ...prevMessages,
              data.onCreateMessages,
            ]);
          }
        },
        error: (error) => console.error("Subscription error:", error),
      });

    // Cleanup subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [params.id]);

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl p-2 mx-auto">
      {/* Chat Header */}
      <Card className="p-2 mb-2 flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>{getInitials(chatroom?.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{chatroom?.name}</h2>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </Card>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 mb-4 rounded-lg border">
        <div className="space-y-4">
          {sortedMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === currentUserId
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  message.senderId === currentUserId
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.imageUrl && (
                  <img
                  src={message.imageUrl}
                  alt="Attached image"
                  className="max-w-[200px] rounded-lg mb-2"
                  />
                )}
                <p>{message.content}</p>
                <span className="text-xs opacity-70">
                  {new Date(message.timestamp!!).toLocaleString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="space-y-2">
        {selectedFilePreview && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={selectedFilePreview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-1 right-1 h-6 w-6"
              onClick={() => {
                setSelectedFile(null);
                setSelectedFilePreview(null);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <form onSubmit={sendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            disabled={isUploading}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
            disabled={isUploading}
          />
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={() => document.getElementById("image-upload")?.click()}
            disabled={isUploading}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button type="submit" size="icon" disabled={isUploading}>
            {isUploading ? (
              <span className="animate-spin">
                <Loader2 className="h-4 w-4" />
              </span>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
