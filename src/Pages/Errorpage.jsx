import React from "react";
import errorPage from "../Assets/404-error.svg";
import Navbar from "../Components/Navbar";
import "./styles/Error.css";
import Base from "../Base";

const Errorpage = () => {
  return (
    <>
      <Base>
        <div className="error-main">
          <img className="error-image" alt="" src={errorPage}></img>
        </div>
      </Base>
    </>
  );
};

export default Errorpage;
