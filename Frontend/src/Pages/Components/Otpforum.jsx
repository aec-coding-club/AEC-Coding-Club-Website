import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Api } from '../../backend';
import { toast } from 'react-toastify'

const Otpforum = () => {
  const [registerdata, setRegisterdata] = useState({
    otp: '',
  });
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    console.log('Data Submitted');
    const data = {
      otp: registerdata.otp,
    };
    const authToken = localStorage.getItem('token');
    const dataposted = await Axios.post(`${Api}verify`, data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (dataposted.data.success) {
      console.log('User Created Successfully');
      navigate('/dashboard');
      window.location.reload();
    } else {
      console.log('User Not Created Successfully');
      setRegisterdata({
        otp: '',
      });
      toast.error(dataposted.data.message, {
        theme: "dark"
      })
      navigate('/verify');
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
        <h1>Enter your OTP here to Verify your Account</h1>
        <div className='details'>
          <input
            type='text'
            name='otp'
            id='otp'
            className='input__field'
            placeholder='Enter your OTP here to verify'
            onChange={(e) => handelChange(e)}
            value={registerdata.otp}
            required
            autoComplete='off'
            maxLength={6}
          ></input>
        </div>

        <button className='btn login-signup-btn'>Verify OTP</button>
      </form>
    </>
  );
};

export default Otpforum;
