import { updateProfile } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { auth } from "./auth.service";

export const DB = getFirestore();

export const updateUserProfileData = async (photoURL, displayName) => {
  return await updateProfile(auth.currentUser, {
    displayName,
    photoURL: photoURL ? photoURL : null,
  });
};

export const addUserToAllUsers = async (user) => {
  await setDoc(doc(DB, "allUsers", user.uid), {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
  });
};

export const createUserChatList = async (user) => {
  await setDoc(doc(DB, "userChats", user.uid), {});
};
