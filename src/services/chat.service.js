import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { DB } from "./user.service";
import { v4 as uuid } from "uuid";

export const checkForExistingChat = async (chatId) => {
  return await getDoc(doc(DB, "allChats", chatId));
};

export const createChatForUser = async (chatId) => {
  return await setDoc(doc(DB, "allChats", chatId), { messages: [] });
};

export const addPrivateChatToUserListOfChat = async (
  client,
  currentUser,
  chatId
) => {
  const userChatsRef = doc(DB, "userChats", currentUser.uid);
  await updateDoc(userChatsRef, {
    [chatId]: {
      chatId,
      lastUpdateDate: serverTimestamp(),
      displayName: client.displayName,
      email: client.email,
      photoURL: client.photoURL,
      uid: client.uid,
    },
  });
};

export const updateUserLastMessage = async (
  messageObject,
  currentUserUID,
  chatId
) => {
  const userChatsRef = doc(DB, "userChats", currentUserUID);
  await updateDoc(userChatsRef, {
    [chatId + ".lastMessage"]: messageObject.text
      ? messageObject.text
      : "File Attached.",
    [chatId + ".lastUpdateDate"]: serverTimestamp(),
  });
};

export const addMessageToChat = async (messageObj, currentUser) => {
  const messageRef = doc(DB, "allChats", currentUser.chatId);
  return await updateDoc(messageRef, {
    messages: arrayUnion({
      messageId: uuid(),
      date: Timestamp.now(),
      senderId: currentUser.currentUserId,
      text: messageObj.text,
      fileURL: messageObj.fileURL,
    }),
  });
};
