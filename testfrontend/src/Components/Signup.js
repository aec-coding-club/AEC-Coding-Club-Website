import React, { useState } from "react";
import Axios from "axios";
import { Api } from "../backend";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const Signup = () => {
  const [registerdata, setRegisterdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact_no: 0,
    branch: "",
    batch: 0,
    password: "",
    confirmPassword: "",
    linkedin: "",
    github: "",
  });
  let navigate = useNavigate();

  console.log("Api is : ", Api);

  async function submit(e) {
    e.preventDefault();
    console.log("Data Submitted");

    const dataposted = await Axios.post(`${Api}register`, {
      firstName: registerdata.firstName,
      lastName: registerdata.lastName,
      email: registerdata.email,
      contact_no: registerdata.contact_no,
      branch: registerdata.branch,
      batch: registerdata.batch,
      password: registerdata.password,
      confirmPassword: registerdata.confirmPassword,
      linkedin: registerdata.linkedin,
      github: registerdata.github,
    });

    if (dataposted.data.success) {
      console.log("User Created Successfully");
      localStorage.setItem("token", dataposted.data.token);
      Cookies.set('token', dataposted.data.token)
      navigate("/verify");
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
          name="firstName"
          id="firstName"
          onChange={(e) => handelChange(e)}
          value={registerdata.firstName}
          placeholder="Enter your Firstname"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => handelChange(e)}
          value={registerdata.lastName}
          placeholder="Enter your Lastname"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handelChange(e)}
          value={registerdata.email}
          placeholder="Enter your Email"
        />
        <input
          type="number"
          name="contact_no"
          id="contact_no"
          onChange={(e) => handelChange(e)}
          value={registerdata.contact_no}
          placeholder="Enter your Contact Number"
        />
        <input
          type="text"
          name="branch"
          id="branch"
          onChange={(e) => handelChange(e)}
          value={registerdata.branch}
          placeholder="Enter your Branch"
        />
        <input
          type="number"
          name="batch"
          id="batch"
          onChange={(e) => handelChange(e)}
          value={registerdata.batch}
          placeholder="Enter your Batch"
        />
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => handelChange(e)}
          value={registerdata.password}
          placeholder="Enter your Password"
        />
        <input
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          onChange={(e) => handelChange(e)}
          value={registerdata.confirmPassword}
          placeholder="Enter your Confirm Password"
        />
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          onChange={(e) => handelChange(e)}
          value={registerdata.linkedin}
          placeholder="Enter your Linked URL"
        />
        <input
          type="text"
          name="github"
          id="github"
          onChange={(e) => handelChange(e)}
          value={registerdata.github}
          placeholder="Enter your Github URL"
        />

        <button>Register</button>
      </form>
    </>
  );
};

export default Signup;
