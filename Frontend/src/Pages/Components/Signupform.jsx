import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { Api } from "../../backend";

const Signupform = () => {
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
  console.log("API is :- ", Api);
  let navigate = useNavigate();

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
      localStorage.setItem("token", dataposted.data.token); // setting token to localstorage
      Cookies.set("token", dataposted.data.token); // setting token to cookies
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
    console.table(newdata);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <h1>Sign Up For An Account</h1>

        <div className="name">
          <div className="details">
            <label htmlFor="firstName">First Name :</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="input__field head-input"
              placeholder="Enter your firstname"
              value={registerdata.firstName}
              onChange={(e) => handelChange(e)}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label htmlFor="lastName">Last Name :</label>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="input__field head-input"
              placeholder="Enter your lastname"
              value={registerdata.lastName}
              onChange={(e) => handelChange(e)}
              required
              autoComplete="off"
            ></input>
          </div>
        </div>

        <div className="details">
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="input__field input-data"
            placeholder="Enter your email"
            onChange={(e) => handelChange(e)}
            value={registerdata.email}
            required
            autoComplete="off"
          ></input>
        </div>

        <div className="details">
          <label htmlFor="contact_no">Contact Number :</label>
          <br />
          <input
            type="number"
            name="contact_no"
            id="contact_no"
            className="input__field input-data"
            placeholder="Enter your contact number"
            onChange={(e) => handelChange(e)}
            value={registerdata.contact_no}
            required
            autoComplete="off"
            maxLength={10}
          ></input>
        </div>

        <div className="name">
          <div className="details">
            <label htmlFor="branch">Branch :</label>
            <br />

            <div className="dropdown">
              <button className="input__field  head-input ">
                Select Branch
              </button>
              <div className="dropdown-content">
                <p>AIML</p>
                <p>CSE</p>
                <p>IT</p>
                <p>CSBS</p>
                <p>ECE</p>
                <p>AEIE</p>
                <p>EE</p>
                <p>ME</p>
                <p>CE</p>
              </div>
            </div>

            <input
              type="text"
              name="branch"
              id="branch"
              className=" input__field  head-input"
              placeholder="Enter your branch"
              onChange={(e) => handelChange(e)}
              value={registerdata.branch}
              required
              autoComplete="off"
            ></input>
            <div className="dropdown-content"></div>
          </div>

          

          <div className="details">
            <label htmlFor="batch">Batch :</label>
            <br />

            <div className="dropdown">
            <button className="input__field  head-input ">Select Batch</button>
            <div className="dropdown-content">
              <p>2022</p>
              <p>2023</p>
              <p>2024</p>
              <p>2025</p>
              <p>2026</p>
             
            </div>
          </div>

            <input
              type="text"
              name="batch"
              id="batch"
              className="input__field head-input dropdown"
              placeholder="Enter your batch Year"
              onChange={(e) => handelChange(e)}
              value={registerdata.batch}
              required
              autoComplete="off"
            ></input>
          </div>
        </div>

        <div className="name">
          <div className="details">
            <label htmlFor="password">Password :</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="input__field head-input"
              placeholder="Enter your password"
              onChange={(e) => handelChange(e)}
              value={registerdata.password}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="details">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="input__field head-input"
              placeholder="Confirm your password"
              onChange={(e) => handelChange(e)}
              value={registerdata.confirmPassword}
              required
              autoComplete="off"
            ></input>
          </div>
        </div>

        <div className="details">
          <label htmlFor="linkedin">LinkedIn URL :</label>
          <br />
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            className="input__field input-data"
            placeholder="Enter your LinkedIn URL"
            onChange={(e) => handelChange(e)}
            value={registerdata.linkedin}
            autoComplete="off"
          ></input>
        </div>

        <div className="details">
          <label htmlFor="github">Github URL :</label>
          <br />
          <input
            type="text"
            name="github"
            id="github"
            className="input__field input-data"
            placeholder="Enter your Github URL"
            onChange={(e) => handelChange(e)}
            value={registerdata.github}
            autoComplete="off"
          ></input>
        </div>

        <button className="btn login-signup-btn">Sign Up</button>

        <div>
          <p>
            <Link to="/" className="links">
              Explore More
            </Link>
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="links">
              Sign In Here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signupform;
