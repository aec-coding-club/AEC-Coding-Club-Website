import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { Api } from "../../backend";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const Signupform = () => {
  const [registerdata, setRegisterdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact_no: "",
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

    console.log(dataposted);
    if (dataposted.data.success) {
      console.log("User Created Successfully");
      localStorage.setItem("token", dataposted.data.token); // setting token to localstorage
      localStorage.setItem(
        "name",
        `${dataposted.data.user.firstName} ${dataposted.data.user.lastName}`
      );
      localStorage.setItem("pimage", `${dataposted.data.user.profilePicture}`);
      // Cookies.set('token', dataposted.data.token); // setting token to cookies
      navigate("/verify");
    } else {
      console.log("User Not Created Successfully");
      console.log("Error data - ", dataposted.data);
      toast.error(dataposted.data.error, {
        theme: "dark",
      });
    }
    console.log(dataposted);
  }

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
    console.table(newdata);
  }

  const [viewPasswordOne, setViewPasswordOne] = useState(false);
  const togglePasswordOne = () => {
    setViewPasswordOne(!viewPasswordOne);
  };
  const [viewPasswordTwo, setViewPasswordTwo] = useState(false);
  const togglePasswordTwo = () => {
    setViewPasswordTwo(!viewPasswordTwo);
  };

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
      <form onSubmit={(e) => submit(e)}>
        <h1>Sign Up For An Account</h1>

        <div className='name'>
          <div className='details'>
            <label htmlFor='firstName'>
              First Name :<span className='asterik'>*</span>
            </label>
            <br />
            <input
              type='text'
              name='firstName'
              id='firstName'
              className='input__field head-input'
              placeholder='Enter your firstname'
              value={registerdata.firstName}
              onChange={(e) => handelChange(e)}
              required
              autoComplete='off'
            ></input>
          </div>

          <div className='details'>
            <label htmlFor='lastName'>
              Last Name :<span className='asterik'>*</span>
            </label>
            <br />
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='input__field head-input'
              placeholder='Enter your lastname'
              value={registerdata.lastName}
              onChange={(e) => handelChange(e)}
              required
              autoComplete='off'
            ></input>
          </div>
        </div>

        <div className='details'>
          <label htmlFor='email'>
            Email :<span className='asterik'>*</span>
          </label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            className='input__field input-data'
            placeholder='Enter your email'
            onChange={(e) => handelChange(e)}
            value={registerdata.email}
            required
            autoComplete='off'
          ></input>
        </div>

        <div className='details'>
          <label htmlFor='contact_no'>
            Contact Number :<span className='asterik'>*</span>
          </label>
          <br />
          <input
            type='text'
            name='contact_no'
            id='contact_no'
            className='input__field input-data'
            placeholder='Enter your contact number'
            onChange={(e) => handelChange(e)}
            value={registerdata.contact_no}
            required
            autoComplete='off'
            maxLength={10}
          ></input>
        </div>

        <div className='name'>
          <div className='details '>
            <label htmlFor='branch'>
              Branch :<span className='asterik'>*</span>
              <br />
              <select
                name='branch'
                id='branch'
                value={registerdata.branch}
                onChange={(e) => handelChange(e)}
                className='head-input input__field'
              >
                <option selected hidden>
                  Choose your branch
                </option>
                <option value='CSE'>CSE</option>
                <option value='IT'>IT</option>
                <option value='AIML'>AIML</option>
                <option value='CSBS'>CSBS</option>
                <option value='ECE'>ECE</option>
                <option value='AEIE'>AEIE</option>
                <option value='EE'>EE</option>
                <option value='CE'>CE</option>
                <option value='ME'>ME</option>
              </select>
            </label>

            {/* <input
              type='text'
              name='branch'
              id='branch'
              className=' input__field  head-input'
              placeholder='Enter your branch'
              onChange={(e) => handelChange(e)}
              value={registerdata.branch}
              required
              autoComplete='off'
            ></input> */}
          </div>

          <div className='details'>
            <label htmlFor='batch'>
              Passout Batch :<span className='asterik'>*</span>
              <br />
              <select
                name='batch'
                id='batch'
                value={registerdata.batch}
                onChange={(e) => handelChange(e)}
                className='head-input input__field'
              >
                <option value='' selected hidden>
                  Choose your batch
                </option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
              </select>
            </label>

            {/* <input
              type='text'
              name='batch'
              id='batch'
              className='input__field head-input'
              placeholder='Enter your batch Year'
              onChange={(e) => handelChange(e)}
              value={registerdata.batch}
              required
              autoComplete='off'
            ></input> */}
          </div>
        </div>

        <div className='name'>
          <div className='details'>
            <label htmlFor='password'>
              Password :<span className='asterik'>*</span>
            </label>
            <br />
            <div className='inline-input-svg'>
              <input
                type={viewPasswordOne ? "text" : "password"}
                name='password'
                id='password'
                className='input__field head-input'
                placeholder='Enter your password'
                onChange={(e) => handelChange(e)}
                value={registerdata.password}
                required
                autoComplete='off'
              ></input>
              <span onClick={togglePasswordOne}>
                {viewPasswordOne ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>

          <div className='details'>
            <label htmlFor='confirmPassword'>
              Confirm Password :<span className='asterik'>*</span>
            </label>
            <br />
            <div className='inline-input-svg'>
              <input
                type={viewPasswordTwo ? "text" : "password"}
                name='confirmPassword'
                id='confirmPassword'
                className='input__field head-input'
                placeholder='Confirm your password'
                onChange={(e) => handelChange(e)}
                value={registerdata.confirmPassword}
                required
                autoComplete='off'
              ></input>
              <span onClick={togglePasswordTwo}>
                {viewPasswordTwo ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
        </div>

        <div className='details'>
          <label htmlFor='linkedin'>LinkedIn URL :</label>
          <br />
          <input
            type='text'
            name='linkedin'
            id='linkedin'
            className='input__field input-data'
            placeholder='Enter your LinkedIn URL'
            onChange={(e) => handelChange(e)}
            value={registerdata.linkedin}
            autoComplete='off'
          ></input>
        </div>

        <div className='details'>
          <label htmlFor='github'>Github URL :</label>
          <br />
          <input
            type='text'
            name='github'
            id='github'
            className='input__field input-data'
            placeholder='Enter your Github URL'
            onChange={(e) => handelChange(e)}
            value={registerdata.github}
            autoComplete='off'
          ></input>
        </div>

        <button className='btn login-signup-btn'>Sign Up</button>

        <div>
          <p>
            <Link to='/' className='links'>
              Explore More
            </Link>
          </p>
          <p>
            Already have an account?{" "}
            <Link to='/signin' className='links'>
              Sign In Here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signupform;
