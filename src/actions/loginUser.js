import { logInWithEmail } from "../services/auth.service";

export const loginUser = async (formData) => {
  try {
    const registeredUserDetails = await logInWithEmail(
      formData.email,
      formData.password
    );
    console.log("inside login", registeredUserDetails);
    // return redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
