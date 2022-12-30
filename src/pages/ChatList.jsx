import { useEffect, useState } from "react";
import Search from "./Search";
import ChatItem from "../components/ChatItem";
import NavBar from "../components/NavBar";
import { searchUser } from "../services/search.service";

function ChatList() {
  const [usersList, setUsersList] = useState([
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
  ]);
  const [searchState, setSearchState] = useState(false);

  useEffect(() => {}, []);

  const onChatSelect = (selectedUserId) => {
    console.log("item clicked", selectedUserId);
  };

  const getSearchItem = (searchQuery) => {
    const searchResult = searchUser(searchQuery);
    searchResult.then((res) => {
      setUsersList(res);
      setSearchState(true);
    });
  };

  const getRecentChats = () => {};

  return (
    <>
      <NavBar />
      <Search searchText={getSearchItem} />
      {searchState && <div>Search for :{}</div>}
      {usersList.map((item) => (
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
