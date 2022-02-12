import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Api } from "../backend";
import { useNavigate } from "react-router-dom";

const Otpform = () => {
  const [registerdata, setRegisterdata] = useState({
    otp: "",
  });
  let navigate = useNavigate();

  console.log("Api is : ", Api);

  async function submit(e) {
    e.preventDefault();
    console.log("Data Submitted");
    const data = {
      otp: registerdata.otp,
    };
    const dataposted = await Axios.post(`${Api}verify`, data, {
      withCredentials: true,
    });
    if (dataposted.data.success) {
      console.log("User Created Successfully");
      navigate("/dashboard")
      
    } else {
      console.log("User Not Created Successfully");
      navigate("/verify")
    }
    console.log(dataposted);
  }

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
    console.log(newdata);
  }

  async function fetchdata() {
    const parseddata = await Axios.post(`${Api}verify`, {
      withCredentials: true,
    })
    if(!parseddata.data.success){
      navigate("/");
    }
    console.log("Useeffet :- ", parseddata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          name="otp"
          id="otp"
          onChange={(e) => handelChange(e)}
          value={registerdata.otp}
          placeholder="Enter your OTP"
          maxLength={6}
        />
        

        <button>Verify OTP</button>
      </form>
    </>
  );
};

export default Otpform;
