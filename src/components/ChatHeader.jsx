import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/chatContext";
import Media from "react-media";

function ChatHeader() {
  const { currentClient } = useContext(ChatContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center">
        <Media query="(max-width: 844px)">
          {(matches) =>
            matches ? <Button onClick={goBack}>Back</Button> : null
          }
        </Media>
        <img
          className="rounded-full w-12"
          src={currentClient.photoURL}
          alt="client profile photo"
        />

        <div className="username">{currentClient.email}</div>
      </div>
    </>
  );
}

export default ChatHeader;
