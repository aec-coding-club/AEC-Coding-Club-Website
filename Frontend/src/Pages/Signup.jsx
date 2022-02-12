import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import signupImg from "../Assets/sign-up.png";
import "./styles/SigninSignup.css";

const Signup = () => {
  // TODO: remove comments below
  // const [credentials, setCredentials] = { userid: "", password: "" };

  // function handleChange(event) {
  //   const { value, name } = event.target;

  //   setCredentials((prevValue) => {
  //     return { ...prevValue, [name]: value };
  //   });
  //   console.log(credentials);
  // }

  return (
    <>
      <div className="user-login">
        <div className="user-img">
          <img alt="" src={signupImg}></img>
        </div>

        <form>
          <h2>Sign Up for an Account</h2>
          <div className="details">
            <label for="exampleInputPassword1">Name:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Enter your name"
              type="text"
              // onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label for="exampleInputPassword1">Email:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Enter your email"
              type="text"
              // onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label for="exampleInputPassword1">Department:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Enter your department"
              type="text"
              // onChange={handleChange}
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
              // onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label for="exampleInputPassword1">Confirm Password:</label>
            <br />
            <input
              name="userid"
              className="input__field"
              placeholder="Re-enter password"
              type="password"
              // onChange={handleChange}
              required
              autoComplete="off"
            ></input>
          </div>

          <button className="btn login-signup-btn">Sign in</button>

          <div>
            <p>
              <a href="/" className="links">
                Explore more
              </a>
            </p>
            <p>
              Already have an account?{" "}
              <a href="/signin" className="links">
                Signin here
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
