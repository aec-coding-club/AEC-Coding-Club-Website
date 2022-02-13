import React from "react";
import signupImg from "../Assets/sign-up.png";
import "./styles/SigninSignup.css";
import Signupform from "./Components/Signupform";

const Signup = () => {
  
  return (
    <>
      <div className="user-login">
        <div className="user-img">
          <img alt="" src={signupImg}></img>
        </div>
        <Signupform/>
        
      </div>
    </>
  );
};

export default Signup;
