import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Api } from "../../backend";
import { useNavigate } from "react-router-dom";
import { GrSend } from "react-icons/gr";

const EmailForme = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted Successfully");
    const { data } = await axios.post(
      `${Api}tokenforreset`,
      {
        email: email,
      },
      {
        withCredentials: true,
        crossorigin: true,
      }
    );
    if (data.success) {
      toast.success("Email Sent Successfully Check Your Email", {
        theme: "dark",
      });
      navigate("/");
      // toast.success("Check Your Email", {theme : "dark"});
    } else {
      toast.error("User Not Registered", {
        theme: "dark",
      });
      setEmail("");
    }
    // console.log("Data: ", data);
  };

  // abirpal282002@gmail.com

  function handelChange(e) {
    setEmail(e.target.value);
    // console.log(email);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Reset Your Password</h1>
        <div className='details'>
          <input
            className='input__field signin__input__field head-input'
            value={email}
            onChange={(e) => handelChange(e)}
            type='email'
            placeholder='Enter the Email to Reset Password'
          ></input>
        </div>
        <button className='btn login-signup-btn' type='submit'>
          Send Email
          {/* &nbsp; <span style={{fontSize: "1.5em", alignItems : "center"}}><GrSend/></span> */}
        </button>
      </form>
    </>
  );
};

export default EmailForme;
