import "./App.scss";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { Route, Routes, Navigate } from "react-router-dom"; // add Switch
import Media from "react-media";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChatList from "./pages/ChatList";
import UserChat from "./pages/UserChat";
import UsersDashboard from "./pages/UsersDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/register" />;
    return children;
  };

  return (
    <div className="bg-brown-light spectrum-Typography h-full w-full">
      <Provider theme={defaultTheme}>
        <h1 className="text-brown tracking-widest">BluffTalk</h1>
        
          <Media query="(max-width: 844px)">
            {(matches) =>
              matches ? (
                <Routes>
                  <Route path="/chats" element={<ProtectedRoute><ChatList /></ProtectedRoute>} />
                  <Route path="/chats/:userId" element={<ProtectedRoute><UserChat /></ProtectedRoute>} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Navigate to="/chats" />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/chats/*" element={<ProtectedRoute><UsersDashboard /></ProtectedRoute>} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Navigate to="/chats" />} />
                </Routes>
              )
            }
          </Media>
      </Provider>
    </div>
  );
}

export default App;
