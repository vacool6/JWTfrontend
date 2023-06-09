import React from "react";

const SignUpPage = () => {
  return (
    <>
      <div>
        <h1>Register</h1>
        <label htmlFor="username">Username: </label>
        <input id="username" />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input id="email" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" />
        <br />
        <br />
        <label htmlFor="cPassword">Confirm Password: </label>
        <input id="cPassword" />
        <br />
        <br />
        <button>Sign up</button>
      </div>
    </>
  );
};

export default SignUpPage;
