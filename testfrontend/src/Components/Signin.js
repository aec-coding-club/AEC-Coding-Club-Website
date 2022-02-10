import React, { useState } from "react";
import Axios from "axios";
import { Api } from "../backend";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [registerdata, setRegisterdata] = useState({
    uid: "",
    password: "",
  });
  let navigate = useNavigate();

  console.log("Api is : ", Api);

  async function submit(e) {
    e.preventDefault();
    console.log("Data Submitted");
    const data = {
      uid: registerdata.uid,
      password: registerdata.password,
    };
    const dataposted = await Axios.post(`${Api}login`, data, {
      withCredentials: true,
      crossorigin: true,
    });

    if (dataposted.data.success) {
      console.log("Logged In Successfully");
      navigate("/");
    } else {
      console.log("User Not Created Successfully");
    }
    console.log(dataposted);
  }

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
    console.log(newdata);
  }

  return (
    <>
      <div className="heading">
        <h1>Login</h1>
      </div>
      <div className="main">
        <img
          src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?b=1&k=20&m=1281150061&s=612x612&w=0&h=Wlus0AvwwVksa9X5w1RUyp1pu8_vbpVOdw25FLBEG_s="
          className="image"
          alt=""
          srcset=""
        />
        <form className="form" onSubmit={(e) => submit(e)}>
          <input
            type="text"
            name="uid"
            id="uid"
            className="textfield"
            onChange={(e) => handelChange(e)}
            value={registerdata.uid}
            placeholder="Enter your User ID"
          />
          <input
            type="text"
            name="password"
            id="password"
            className="textfield"
            onChange={(e) => handelChange(e)}
            value={registerdata.password}
            placeholder="Enter your Password"
          />

          <button className="btn btn-signin">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
