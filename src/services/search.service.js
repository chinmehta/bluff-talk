import { collection, query, where, getDocs } from "firebase/firestore";
import { DB } from "./user.service";

export const searchUser = async (searchTerm) => {
  const searchResults = [];
  const allUsersRef = collection(DB, "allUsers");
  const emailQuery = query(allUsersRef, where("email", ">=", searchTerm));
  //   const displayNameQuery = query(allUsersRef, where("displayName", "==", searchTerm));
  const querySnapshot = await getDocs(emailQuery);
  try {
    querySnapshot.forEach((doc) => {
      searchResults.push(doc.data());
    });
  } catch (err) {
    console.log(err);
  }
  return searchResults;
};
