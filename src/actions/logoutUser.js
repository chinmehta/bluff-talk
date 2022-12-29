import { logOut } from "../services/auth.service";

export const logoutUser = async () => {
  try {
    const user = await logOut();
    console.log("logout", user);
  } catch (error) {
    console.log(error);
  }
};
