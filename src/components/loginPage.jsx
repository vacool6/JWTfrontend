import React, { useState } from "react";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [bearer, setBearer] = useLocalStorage("JWT", null);

  const clickHandler = async () => {
    if (username && password) {
      const response = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });
      setBearer(response.data.token);
      setUsername("");
      setPassword("");
      return login(true);
    }
    return alert("Please fill the details");
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={clickHandler}>Login</button>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default LoginPage;
