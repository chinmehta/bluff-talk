import { useEffect, useState, useContext } from "react";
import Search from "./Search";
import ChatItem from "../components/ChatItem";
import NavBar from "../components/NavBar";
import { searchUser } from "../services/search.service";
import { AuthContext } from "../context/authContext";
import { userClicked } from "../actions/searchUser";
import { doc, onSnapshot } from "firebase/firestore";
import { DB } from "../services/user.service";
import { ChatContext } from "../context/chatContext";
import { useNavigate } from "react-router-dom";

function ChatList() {
  const { currentUser } = useContext(AuthContext);
  const { setCurrentClient } = useContext(ChatContext);
  const [usersList, setUsersList] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.uid && !searchState) {
      const unsubscribeToUsersChat = onSnapshot(
        doc(DB, "userChats", currentUser.uid),
        (response) => {
          setUsersList(Object.values(response.data()));
        }
      );
      return () => {
        unsubscribeToUsersChat();
      };
    }
  }, [currentUser.uid, searchState]);

  const onChatSelect = async (selectedClient) => {
    const chatId = await userClicked(selectedClient, currentUser);
    selectedClient.chatId = chatId;
    setCurrentClient(selectedClient);
    navigate("/chats/" + selectedClient.uid)
    setSearchState(false);
  };

  const getSearchItem = (searchQuery) => {
    const searchResult = searchUser(searchQuery);
    searchResult.then((res) => {
      setUsersList(res);
      setSearchState(true);
    });
  };

  return (
    <>
      <NavBar />
      <Search searchText={getSearchItem} />
      {searchState && <div>Search for :{}</div>}
      {usersList.length > 0 ?
        usersList.map((item) => (
          <ChatItem key={item.uid} item={item} onChatSelect={onChatSelect} />
        )) : 
        "No Recent Chats"
      }
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
