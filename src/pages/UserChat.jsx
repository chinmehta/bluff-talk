import { onSnapshot, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";
import UserInput from "../components/UserInput";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";
import { DB } from "../services/user.service";

function UserChat() {
  let { userId } = useParams();
  const [allMessages, setAllMessages] = useState([]);
  const { currentClient } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentClient.uid) {
      const CHAT_REF = doc(DB, "allChats", currentClient.chatId);
      const unsubscribeMessageOnClose = onSnapshot(CHAT_REF, (doc) =>
        setAllMessages(doc.data().messages)
      );

      return () => {
        unsubscribeMessageOnClose();
      };
    }
  }, [currentClient]);

  return (
    <>
      <div className="chat-container h-full flex flex-col mx-5">
        <div className="chat-header">
          <ChatHeader />
        </div>
        <div className="chat-container flex flex-col">
          {allMessages.length > 0 &&
            allMessages.map((message) => (
              <Message messageObject={message} key={message.messageId} />
            ))}
        </div>
        <div className="user-input-container flex mt-auto">
          <UserInput
            currentUserId={currentUser.uid}
            chatId={currentClient.chatId}
          />
        </div>
      </div>
    </>
  );
}

export default UserChat;
