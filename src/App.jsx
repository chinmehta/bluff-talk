import "./App.scss";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChatList from "./pages/ChatList";

function App() {
  return (
    <div className="bg-brown-light spectrum-Typography h-full w-full">
      <Provider theme={defaultTheme}>
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL text-brown tracking-widest">
          BluffTalk
        </h1>
        <Register />
        {/* <ChatList /> */}
      </Provider>
    </div>
  );
}

export default App;
