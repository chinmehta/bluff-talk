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

  const { currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser) return <Navigate to="/login"/>
  }
  


  return (
    <div className="bg-brown-light spectrum-Typography h-full w-full">
      <Provider theme={defaultTheme}>
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL text-brown tracking-widest">
          BluffTalk
        </h1>
        <Media query="(max-width: 844px)">
          {(matches) =>
            matches ? (
              <Routes>
                <Route
                  exact
                  path="/chats"
                  render={(props) => (
                    <ChatList></ChatList>

                    // <UsersList users={this.state.users} {...props} />
                  )}
                />
                <Route
                  path="/chat/:id"
                  render={(props) => (
                    <UserChat></UserChat>
                    // <UsersDetails
                    //   user={
                    //     this.state.users.filter(
                    //       (user) =>
                    //         user.id === parseInt(props.match.params.id, 10)
                    //     )[0]
                    //   }
                    //   {...props}
                    // />
                  )}
                />
                {/* <Navigate from="/" to="/chats" />
                <Navigate from="/dashboard" to="/chats" /> */}
              </Routes>
            ) : (
              <Routes>
                <Route
                  path="/dashboard"
                  render={(props) => (
                    <UsersDashboard />
                    // <UsersDashboard users={this.state.users} {...props} />
                    // <ChatList />
                  )}
                />
                {/* <Navigate from="/" to="/dashboard" /> */}
                {/* <Navigate from="/chats" to="/dashboard" /> */}
              </Routes>
            )
          }
        </Media>

        <Register />
        {/* <ChatList /> */}
      </Provider>
    </div>
  );
}

export default App;
