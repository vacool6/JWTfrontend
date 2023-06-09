import React from "react";
import { useAuth } from "../context/auth";

const LoginPage = () => {
  const { login } = useAuth();
  const clickHandler = () => {
    login(true);
  };
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input id="username" />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input id="password" />
      <br />
      <br />
      <button onClick={clickHandler}>Login</button>
    </div>
  );
};

export default LoginPage;
