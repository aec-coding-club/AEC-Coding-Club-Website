import React, { useState } from "react";
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
    
    const dataposted = await Axios.get(`${Api}verify`, {
      otp: registerdata.otp,
    });

    if (dataposted.data.success) {
      console.log("User Created Successfully");
      navigate("/")
      
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
