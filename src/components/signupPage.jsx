import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const clickHandler = async () => {
    if (username && password && cPassword) {
      if (password !== cPassword) {
        setUsername("");
        setPassword("");
        setCPassword("");
        return alert("Password did not match");
      } else {
        const register = await axios.post("http://localhost:4000/register", {
          username,
          password,
        });
        console.log(register);
        setUsername("");
        setPassword("");
        setCPassword("");
        return alert(register.data.message);
      }
    }
    return alert("Please fill the details");
  };
  return (
    <>
      <div>
        <h1>Register</h1>
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
        <label htmlFor="cPassword">Confirm Password: </label>
        <input
          id="cPassword"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={clickHandler}>Sign up</button>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
