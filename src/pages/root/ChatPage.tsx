import React from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const params = useParams();

  console.log(params);

  const chatId = params.id;

  console.log(chatId);

  return (
    <div>
      ChatPage
      <div>Chat ID: {chatId}</div>
    </div>
  );
};

export default ChatPage;
