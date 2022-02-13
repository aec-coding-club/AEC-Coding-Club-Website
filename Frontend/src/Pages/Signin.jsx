import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import loginImg from "../Assets/login.png";
import "./styles/SigninSignup.css";

const Signin = () => {
  const [credentials, setCredentials] = useState({ userid: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setCredentials((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(credentials);
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="user-login">
        <div className="user-img">
          <img alt="" src={loginImg}></img>
        </div>

        <form>
          <h1>Sign In with your UID and Password</h1>
          <div className="details">
            <label for="exampleInputPassword1">User Id:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Enter user id"
              type="text"
              onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label for="exampleInputPassword1">Password:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Enter password"
              type="password"
              onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <button className="btn login-signup-btn">Sign In</button>

          <div>
            <p>
              <a href="/" className="links">
                Explore More
              </a>
            </p>
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="links">
                Register Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
