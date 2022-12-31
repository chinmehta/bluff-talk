import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { DB } from "./user.service";

export const checkForExistingChat = async (chatId) => {
  return await getDoc(doc(DB, "allChats", chatId));
};

export const createChatForUser = async (chatId) => {
  return await setDoc(doc(DB, "allChats", chatId), { messages: [] });
};

export const updateUserChatList = async (client, currentUser, chatId) => {
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

