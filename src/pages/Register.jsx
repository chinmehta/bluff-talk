import { useState, useMemo } from "react";
import { TextField, Form, Button } from "@adobe/react-spectrum";
import { registerUser } from "../actions/registerUser";

function Register() {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let isValidEmail = useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
    [email]
  );

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.elements.username.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      profilePhoto: event.target.elements["profile-photo"].files[0],
    };
    registerUser(userData);
  };

  return (
    <>
    <h1>Register</h1>
      <Form isRequired method="post" onSubmit={onSubmit}>
        <TextField
          value={name}
          onChange={setName}
          type="text"
          label="Name"
          inputMode="text"
          name="username"
        />
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
        <input className="hidden" type="file" name="profile-photo" id="profilePhoto" />
        <label htmlFor="profilePhoto">
            Upload Phtoto
        </label>
        <Button variant="accent" style="fill" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;
