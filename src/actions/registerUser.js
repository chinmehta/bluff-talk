import { RegisterUserWithEmail } from "../services/auth.service";
import { getImageDownloadURL, uploadImage } from "../services/storage.service";
import { addUserToAllUsers, updateUserProfileData } from "../services/user.service";

export const registerUser = async (formData) => {
  try {
    const registeredUserDetails = await RegisterUserWithEmail(
      formData.email,
      formData.password
    );
    await uploadImage(formData.profilePhoto, registeredUserDetails.user.uid);

    const downloadURL = await getImageDownloadURL(
      registeredUserDetails.user.uid
    );
    await updateUserProfileData(downloadURL, formData.username);
    await addUserToAllUsers(registeredUserDetails.user)
  } catch (error) {
    console.log(error);
  }
  console.log("inside register");
};
