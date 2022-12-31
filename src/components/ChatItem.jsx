import { Divider } from "@adobe/react-spectrum";
import React from "react";

function ChatItem({ item, onChatSelect }) {
  return (
    <>
      <div
        className="flex py-1"
        onClick={() => {
          onChatSelect(item);
        }}
      >
        <div className="flex items-center p-1.5">
          <img
            className="rounded-full w-12"
            src={item.photoURL}
            alt="user profile photo"
          />
        </div>
        <div className="w-full p-1.5">
          <div className="username-container flex justify-between ">
            <div className="username">{item.email}</div>
            <div className="last-message">{item.time}</div>
          </div>
          <div className="user-last-message">{item.lastMessage}</div>
        </div>
      </div>
      <Divider size="S" />
    </>
  );
}

export default ChatItem;
