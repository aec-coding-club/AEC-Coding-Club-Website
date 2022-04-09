import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

const Base = ({ children }) => {
  const getFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const pimage = localStorage.getItem("pimage");
    if (!token) return null;
    else return [token, name, pimage];
  };

  const [tokenChecker, setTokenChecker] = useState(getFromLocalStorage());
  
  return (
    <>
      {tokenChecker ? (
        <Navbar userImage={tokenChecker[2]} userNameText={tokenChecker[1]} />
      ) : (
        <Navbar />
      )}

      <div>{children}</div>
    </>
  );
};

export default Base;
