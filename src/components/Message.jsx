import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Message({ messageObject }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className={`flex justify-between w-fit max-w-80 break-words px-2 py-1 m-1 rounded-b-lg ${currentUser.uid === messageObject.senderId ? "bg-brown rounded-l-lg self-end" : "bg-brown-light rounded-r-lg self-start"} `}>
        <span className="message-text">{messageObject.text}</span>
        <span className="time-text flex items-end pl-">
          {messageObject.date.toDate().getHours() +
            ":" +
            messageObject.date.toDate().getMinutes()}
        </span>
      </div>
    </>
  );
}

export default Message;
