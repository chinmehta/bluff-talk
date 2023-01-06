import { addMessageToChat, updateUserLastMessage } from "../services/chat.service";
import { getImageDownloadURL, uploadImage } from "../services/storage.service";
import { v4 as uuid } from "uuid";

export const sendMessage = async (messageObj, currentUser) => {
  let message = {
    text: messageObj.text,
    fileURL: null,
  };
  if (messageObj.file) {
    const FILE_ID = uuid();
    await uploadImage(messageObj.file, FILE_ID);
    message.fileURL = await getImageDownloadURL(FILE_ID);
  }
  await addMessageToChat(message, currentUser);
  await updateUserLastMessage(message, currentUser.currentUserId, currentUser.chatId);
  await updateUserLastMessage(message, currentUser.currentClientId, currentUser.chatId);
};
