import React from "react";
import { TextField, Form, Button, Item, ListView } from "@adobe/react-spectrum";
import { logoutUser } from "../actions/logoutUser";
import Search from "./Search";
import ChatItem from "../components/ChatItem";
import NavBar from "../components/NavBar";

function ChatList({ usersList }) {
  const dummyList = [
    {
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/bluff-talk.appspot.com/o/nJLgpjg3fdNlZI5pI4ymyb3MtlJ2?alt=media&token=ab8c36aa-e324-4bbb-a7ad-a30811337741",
      displayName: "Chintan",
      lastMessage: "Hii",
      time: "12:34",
      uid: "OxmvORZFAWQeS9g9G1UVRrY5PeX53",
    },
    {
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/bluff-talk.appspot.com/o/nJLgpjg3fdNlZI5pI4ymyb3MtlJ2?alt=media&token=ab8c36aa-e324-4bbb-a7ad-a30811337741",
      displayName: "Chintan",
      lastMessage: "Hii",
      time: "12:34",
      uid: "OxmvORZFAWQeS93g9GUVRrY5PeX53",
    },
    {
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/bluff-talk.appspot.com/o/nJLgpjg3fdNlZI5pI4ymyb3MtlJ2?alt=media&token=ab8c36aa-e324-4bbb-a7ad-a30811337741",
      displayName: "Chintan",
      lastMessage: "Hii",
      time: "12:34",
      uid: "OxmvORZF3AWQeS9g9GUVRrY5PeX53",
    },
  ];

  const onChatSelect = (e) => {
    console.log("item clicked", e);
  };
  return (
    <>
      <NavBar />
      <Search />
      {dummyList.map((item) => (
        <ChatItem key={item.uid} item={item} onChatSelect={onChatSelect} />
      ))}
      {/* <ListView
        selectionMode="multiple"
        aria-label="Static ListView items example"
        maxWidth="size-6000"
      >
        <Item>Adobe Photoshop</Item>
        <Item>Adobe InDesign</Item>
        <Item>Adobe AfterEffects</Item>
        <Item>Adobe Illustrator</Item>
        <Item>Adobe Lightroom</Item>
      </ListView> */}
    </>
  );
}

export default ChatList;
