import { useState, useMemo } from "react";
import { TextField, Form, Button } from "@adobe/react-spectrum";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/loginUser";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  let isValidEmail = useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
    [email]
  );

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    const loggedinUser = loginUser(userData);
    loggedinUser.then(() => {
      navigate("/chats");
    });
  };

  return (
    <>
      <h1>Welcome back, Login</h1>
      <Form isRequired method="post" onSubmit={onSubmit}>
        <TextField
          value={email}
          onChange={setEmail}
          type="email"
          label="Email"
          inputMode="email"
          name="email"
        />
        <TextField
          value={password}
          onChange={setPassword}
          type="password"
          label="Password"
          inputMode="text"
          name="password"
        />
        <Button variant="accent" style="fill" type="submit">
          Login
        </Button>
        <Link to="/register">register</Link>
      </Form>
    </>
  );
}

export default Login;
