import { TextField } from "@adobe/react-spectrum";
import React from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";

function UserChat() {
  let { userId } = useParams();
  return (
    <>
      <div className="chat-container h-full flex flex-col">
        <div className="chat-header">
          <ChatHeader />
          {userId}
        </div>
        <div className="chat-container">
          <Message />
        </div>
        <div className="user-input-container mt-auto">
          <TextField label="Type a message" width="100%" />
        </div>
      </div>
    </>
  );
}

export default UserChat;
