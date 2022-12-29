import { collection, query, where, getDocs } from "firebase/firestore";
import { DB } from "./user.service";


export const searchUser = async (searchTerm) => {
  const allUsersRef = collection(DB, "allUsers");

  const emailQuery = query(allUsersRef, where("email", "==", searchTerm));
  //   const displayNameQuery = query(allUsersRef, where("displayName", "==", searchTerm));
  const querySnapshot = await getDocs(emailQuery);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};
