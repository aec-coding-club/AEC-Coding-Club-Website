import React from "react";
import signupImg from "../Assets/sign-up.svg";
import "./styles/SigninSignup.css";
import Signupform from "./Components/Signupform";
import Base from "../Base";

const Signup = () => {
  return (
    <>
      <Base>
        <div className="user-login ">
          <div className="user-img">
            <img alt="" src={signupImg}></img>
          </div>
          <Signupform />
        </div>
      </Base>
    </>
  );
};

export default Signup;
