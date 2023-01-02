import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { sendMessage } from "../actions/sendMessage";

function UserInput({ currentUserId, chatId }) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputFile, setUserInputFile] = useState(null);

  const userObj = {
    uid: currentUserId,
    chatId: chatId,
  };

  const send = () => {
    //check for file
    const messageObj = {
      text: userInputText,
      file: userInputFile,
    };
    sendMessage(messageObj, userObj);
    setUserInputText("");
    setUserInputFile(null);
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        value={userInputText}
        onChange={(e) => {
          setUserInputText(e.target.value);
        }}
      />
      <Button variant="contained" size="small" onClick={send}>
        Send
      </Button>
    </>
  );
}

export default UserInput;
