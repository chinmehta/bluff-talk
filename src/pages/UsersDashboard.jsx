import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatList from "./ChatList";
import UserChat from "./UserChat";

function UsersDashboard() {
  return (
    <>
      <div className="dhasboard-container">
        <ChatList></ChatList>
        <Routes>
          <Route path=":userId" element={<UserChat />} />
        </Routes>
      </div>
    </>
  );
}

export default UsersDashboard;
