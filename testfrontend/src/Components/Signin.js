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

    const dataposted = await Axios.post(`${Api}login`, {
      uid: registerdata.uid,
      password: registerdata.password,
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
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          name="uid"
          id="uid"
          onChange={(e) => handelChange(e)}
          value={registerdata.uid}
          placeholder="Enter your User ID"
        />
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => handelChange(e)}
          value={registerdata.password}
          placeholder="Enter your Password"
        />

        <button>Sign In</button>
      </form>
    </>
  );
};

export default Signin;
