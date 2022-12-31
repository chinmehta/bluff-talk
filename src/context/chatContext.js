import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [currentClient, setCurrentClient] = useState({});

  return (
    <ChatContext.Provider value={{ currentClient, setCurrentClient }}>
      {children}
    </ChatContext.Provider>
  );
};
