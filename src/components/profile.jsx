import axios from "axios";
import React from "react";

const Profile = () => {
  const getData = async () => {
    const data = await axios.get("http://localhost:4000/protected", {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem("JWT"))}`,
      },
    });
    alert("You data is logged in the console");
    console.log(data.data);
  };
  return (
    <>
      <div>
        <h1>Your profile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti
          architecto dolore veritatis blanditiis perferendis cupiditate laborum
          natus eos possimus repellat rem fugit sequi temporibus pariatur, quos
          aliquid earum accusamus?
        </p>
      </div>
      <button onClick={getData}>Get info</button>
    </>
  );
};

export default Profile;
