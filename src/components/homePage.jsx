import React from "react";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { logout, token } = useAuth();
  const clickHandler = () => {
    logout();
  };
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore saepe
        perferendis iusto accusamus animi, vitae quibusdam et voluptate velit
        incidunt illo, expedita obcaecati cumque mollitia quas ipsa inventore
        sint id.
      </p>
      {token ? (
        <div>
          <button onClick={clickHandler}>Sign out</button>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/npmsearch">
            <button>Npm search</button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
