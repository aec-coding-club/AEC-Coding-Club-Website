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
          <img alt='' src="https://res.cloudinary.com/sahebcloud/image/upload/v1649398312/mobile-login-animate_2_hg0ax6.svg"></img>
        </div>
        <Siginform />
      </div>
    </>
  );
};

export default Signin;
