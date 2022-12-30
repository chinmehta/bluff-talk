import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatList from "./ChatList";
import UserChat from "./UserChat";

function UsersDashboard() {
  return (
    <>
      <div className="dhasboard-container flex">
        <div className="chat-list-container">
          <ChatList></ChatList>
        </div>
        <div className="user-chat-container grow">
          <Routes>
            <Route path=":userId" element={<UserChat />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UsersDashboard;
