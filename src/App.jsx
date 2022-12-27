import "./App.scss";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className="bg-brown-light spectrum-Typography h-100 w-100">
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL text-brown tracking-widest">BluffTalk</h1>
        <Login/>
      </div>
    </Provider>
  );
}

export default App;
