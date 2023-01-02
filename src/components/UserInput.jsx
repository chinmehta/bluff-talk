import { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { sendMessage } from "../actions/sendMessage";
import { AttachFile } from '@mui/icons-material';

function UserInput({ currentUserId, chatId }) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputFile, setUserInputFile] = useState(null);

  const userObj = {
    uid: currentUserId,
    chatId: chatId,
  };

  const send = () => {
    //check for file
    if (!userInputText && !userInputFile) return null;
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
        fullWidth
        multiline
        maxRows={6}
        label="Message"
        variant="outlined"
        value={userInputText}
        onChange={(e) => {
          setUserInputText(e.target.value);
        }}
      />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          hidden
          type="file"
          onChange={(e) => {
            setUserInputFile(e.target.files[0]);
          }}
        />
        <AttachFile />
      </IconButton>
      <Button variant="contained" size="small" onClick={send}>
        Send
      </Button>
    </>
  );
}

export default UserInput;
