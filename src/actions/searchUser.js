import {
  checkForExistingChat,
  createChatForUser,
  addPrivateChatToUserListOfChat,
} from "../services/chat.service";

export const userClicked = async (client, currentUser) => {
  const chatId = getChatId(client.uid, currentUser.uid);
  const existingChat = await checkForExistingChat(chatId);
  if (existingChat.exists()) {
    return chatId;
  }
  await createChatForUser(chatId);
  await addPrivateChatToUserListOfChat(client, currentUser, chatId);
  await addPrivateChatToUserListOfChat(currentUser, client, chatId);
  return chatId;
};

const getChatId = (clientId, currentUserId) => {
  const combinedId =
    currentUserId > clientId
      ? currentUserId + clientId
      : clientId + currentUserId;
  return combinedId;
};
