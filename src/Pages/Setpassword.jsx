import React, { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../backend";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Setpassword = () => {
  const [Passworddata, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  let loation = useLocation();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully");
    console.log("Path Name : ", loation.pathname.slice(1));
    const data = {
      password: Passworddata.password,
      confirmPassword: Passworddata.confirmPassword,
    };
    const dataPosted = await axios.post(
      `${Api}${loation.pathname.slice(1)}`,
      data,
      {
        withCredentials: true,
        crossorigin: true,
      }
    );
    console.log("Data: ", dataPosted);
  };

  function handelChange(e) {
    const newdata = { ...Passworddata };
    newdata[e.target.id] = e.target.value;
    setPassword(newdata);
    console.log(newdata);
  }

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
      <h1>Update Password Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input__field"
          name="password"
          id="password"
          type="text"
          placeholder="Enter the new password"
          value={Passworddata.password}
          onChange={(e) => handelChange(e)}
        />
        <br />
        <input
          className="input__field"
          name="confirmPassword"
          id="confirmPassword"
          type="text"
          placeholder="Confirm the password"
          value={Passworddata.confirmPassword}
          onChange={(e) => handelChange(e)}
        />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Setpassword;
