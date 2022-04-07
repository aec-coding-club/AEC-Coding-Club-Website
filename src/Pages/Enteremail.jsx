import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import EmailForme from "./Components/EmailForme";

const Enteremail = () => {
  let navigate = useNavigate();
  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      navigate("/");
    }
  }

  useEffect(() => {
    tokenCheker();
  }, []);

  return (
    <>
      <h1>Enter your email address to Reset Password</h1>
      <EmailForme />
    </>
  );
};

export default Enteremail;
