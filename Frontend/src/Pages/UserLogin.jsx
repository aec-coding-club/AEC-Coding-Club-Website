import React, { useState } from "react";
import "../Components/styles/UserLogin.css";

function UserLogin() {
  const [credentials, setCredentials] = useState({ userid: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setCredentials((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(credentials);
  }

  return (
    <div className="user-login">
      <div className="user-img">
        <img
          alt=""
          src="https://www.getillustrations.com/packs/splattered-brush-empty-state-vector-illustrations/scenes/_1x/accounts%20_%20user,%20account,%20settings,%20security,%20laptop,%20woman_md.png"
        ></img>
      </div>

      <form>
        <h2>Log In</h2>
        <div className="details">
          <label for="exampleInputPassword1">User Id:</label>
          <br />
          <input
            name="userid"
            className="details-input"
            placeholder=" Enter user id"
            type="text"
            onChange={handleChange}
          ></input>
        </div>

        <div className="details">
          <label for="exampleInputPassword1">Password:</label>
          <br />
          <input
            name="userid"
            className="details-input"
            placeholder=" Enter password"
            type="text"
            onChange={handleChange}
          ></input>
        </div>

        <button>Login</button>

        <div>
          <p>
            <a href="#" className="links">
              Explore more
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a href="#" className="links">
              Register here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
