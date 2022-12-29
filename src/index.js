import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter, BrowserRouter } from "react-router-dom";
import UsersDashboard from "./pages/UsersDashboard";
import ChatList from "./pages/ChatList";
import UserChat from "./pages/UserChat";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <UsersDashboard />,
  },
  {
    path: "/chats",
    element: <ChatList />,
  },
  {
    path: "/chat/:id",
    element: <UserChat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      {/* <RouterProvider router={router} /> */}
      </BrowserRouter>
    </React.StrictMode>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
