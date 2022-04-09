import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Api } from "../../backend";
import { toast } from "react-toastify";

const Otpforum = () => {
  const [registerdata, setRegisterdata] = useState({
    otp: "",
  });
  const [email, setEmail] = useState("")
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    // console.log("Data Submitted");
    const data = {
      otp: registerdata.otp,
    };
    const authToken = localStorage.getItem("token");
    const dataposted = await Axios.post(`${Api}verify`, data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });

    
    if (dataposted.data.success) {
      //console.log("User Created Successfully");
      navigate("/dashboard");
      window.location.reload();
    } else {
      // console.log("User Not Created Successfully");
      setRegisterdata({
        otp: "",
      });
      toast.error(dataposted.data.message, {
        theme: "dark",
      });
      navigate("/verify");
    }
    // console.log(dasbodedata);
  }

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
    // console.log(newdata);
  }
  useEffect(() => {
    const e = localStorage.getItem('email')
    setEmail(e)
  }, [])
  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <h1>Enter your OTP here to Verify your Account</h1>
        <div className='details'>
          <p className="email-notify">
            we sent an email with varification code to <br />
            <span className="email-name">{email}</span>
          </p>
          <input
            type='text'
            name='otp'
            id='otp'
            className='input__field otp__input__field'
            placeholder='Enter your OTP here to verify'
            onChange={(e) => handelChange(e)}
            value={registerdata.otp}
            required
            autoComplete='off'
            maxLength={6}
          ></input>
        </div>
        <p className="otp-bottom-notes">
          Didn't get the code?
          <ul>
            <li>Codes can take up to 5 minutes to arrive </li>
            <li>Check your spam and promotion folder</li>
          </ul>
        </p>
        <button className='btn login-signup-btn'>Verify OTP</button>
      </form>
    </>
  );
};

export default Otpforum;
