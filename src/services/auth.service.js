import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_APP } from "../firebase";

export const auth = getAuth(FIREBASE_APP);

export const RegisterUserWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const logInWithEmail = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
};

export const logOut = async () => {
  return await signOut(auth)
};
