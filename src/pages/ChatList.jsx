import React from "react";
import { TextField, Form, Button } from "@adobe/react-spectrum";
import { logoutUser } from "../actions/logoutUser";


function ChatList({ usersList }) {
  const dummyList = [
    {
      imgUrl: "",
      name: "",
      lastMessage: "",
      time: "",
    }
  ]
  return (
    <>
      <Button variant="accent" style="fill" onPress={logoutUser}>
          Logout
        </Button>
      {dummyList.map((user, index) => (
        <div className="flex" key={index}>
          <div className="user-image">
            <img src="" alt="user profile photo" />
          </div>
          <div className="user-info-container">
            <div className="username-container flex justify-between ">
              <div className="username">name</div>
              <div className="last-message">time</div>
            </div>
            <div className="user-last-message">last message</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChatList;
