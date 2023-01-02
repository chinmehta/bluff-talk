import { RegisterUserWithEmail } from "../services/auth.service";
import { getImageDownloadURL, uploadImage } from "../services/storage.service";
import { addUserToAllUsers, createUserChatList, updateUserProfileData } from "../services/user.service";
import { redirect } from "react-router-dom";

export const registerUser = async (formData) => {
  try {
    const registeredUserDetails = await RegisterUserWithEmail(
      formData.email,
      formData.password
    );
    formData.profilePhoto && await uploadImage(formData.profilePhoto, registeredUserDetails.user.uid);

    const downloadURL = formData.profilePhoto ? await getImageDownloadURL(
      registeredUserDetails.user.uid
    ) : null;
    await updateUserProfileData(downloadURL, formData.username);
    await addUserToAllUsers(registeredUserDetails.user);
    await createUserChatList(registeredUserDetails.user);
    console.log("inside register",registeredUserDetails.user);
    // return redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
