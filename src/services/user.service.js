import { updateProfile } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { auth } from "./auth.service";

export const DB = getFirestore();

export const updateUserProfileData = async (photoURL, username) => {
  return await updateProfile(auth.currentUser, {
    displayName: username,
    photoURL: photoURL,
  })
};

export const addUserToAllUsers = async (user) => {
  console.log(user);
  await setDoc(doc(DB, "allUsers", user.uid), {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
  });
};
