import {
  checkForExistingChat,
  createChatForUser,
  updateUserChatList,
} from "../services/chat.service";

export const userClicked = async (client, currentUser) => {
  const chatId = getChatId(client.uid, currentUser.uid);
  const existingChat = await checkForExistingChat(chatId);
  if (existingChat.exists()) {
    return chatId;
  }
  await createChatForUser(chatId);
  await updateUserChatList(client, currentUser, chatId);
  await updateUserChatList(currentUser, client, chatId);
  return chatId;
};

const getChatId = (clientId, currentUserId) => {
  const combinedId =
    currentUserId > clientId
      ? currentUserId + clientId
      : clientId + currentUserId;
  return combinedId;
};
