import React from "react";
import Siginform from "./Components/Siginform";
import "./styles/SigninSignup.css";
import Base from "../Base";

const Signin = () => {
  return (
    <>
      <Base>
        <div className="user-login">
          <div className="user-img">
            <img
              alt=""
              src="https://res.cloudinary.com/sahebcloud/image/upload/v1649398312/mobile-login-animate_2_hg0ax6.svg"
            ></img>
          </div>
          <Siginform />
        </div>
      </Base>
    </>
  );
};

export default Signin;
