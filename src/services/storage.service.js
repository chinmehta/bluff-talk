import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const storage = getStorage();

export const uploadImage = async (file, fileName) => {
  const storageRef = ref(storage, fileName);
  return await uploadBytesResumable(storageRef, file);
};

export const getImageDownloadURL = async(uid) => {
  const imageRef = ref(storage, uid);
  return await getDownloadURL(imageRef);
}
