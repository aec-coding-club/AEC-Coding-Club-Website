import React from "react";
import loginImg from "../Assets/login.svg";
import Navbar from "../Components/Navbar";
import Siginform from "./Components/Siginform";
import "./styles/SigninSignup.css";

const Signin = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='user-login'>
        <div className='user-img'>
          <img alt='' src={loginImg}></img>
        </div>
        <Siginform />
      </div>
    </>
  );
};

export default Signin;
