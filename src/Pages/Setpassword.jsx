import React, { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../backend";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import resetpassword from "../Assets/Reset password.gif";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

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
    if (dataPosted.data.success) {
      toast.success(dataPosted.data.message, { theme: "dark" });
      navigate("/signin");
    } else {
      toast.error(dataPosted.data.message, {
        theme: "dark",
      });
      setPassword({
        password: "",
        confirmPassword: "",
      });
    }
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

  const [viewPassword, setViewPassword] = useState(false)
  const togglePassword = () => {
    setViewPassword(!viewPassword)
  }

  useEffect(() => {
    tokenCheker();
  }, []);

  return (
    <>
      <div className="user-login ">
        <div className="user-img">
          <img alt="" src={resetpassword}></img>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Update Your Password</h1>
          <div className="details inline-input-svg">
            <input
              className="input__field signin__input__field"
              name="password"
              id="password"
              type={viewPassword ? 'text' : 'password'}
              placeholder="Enter the new password"
              value={Passworddata.password}
              onChange={(e) => handelChange(e)}
            />
            <span onClick={togglePassword}>
              {viewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <div className="details inline-input-svg">
            <input
              className="input__field signin__input__field"
              name="confirmPassword"
              id="confirmPassword"
              type={viewPassword ? 'text' : 'password'}
              placeholder="Confirm the password"
              value={Passworddata.confirmPassword}
              onChange={(e) => handelChange(e)}
            />
            <span onClick={togglePassword}>
              {viewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <button type="submit" className="btn">
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default Setpassword;
