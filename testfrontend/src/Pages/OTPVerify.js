import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Otpform from '../Components/OTPform';
import { useNavigate } from 'react-router-dom';
import { Api } from '../backend';

const Mainform = () => {
  return (
    <>
      Verify OTP Page
      <Otpform />
    </>
  );
};

const OTPVerify = () => {
  const [auth, setAuth] = useState(true);
  let navigate = useNavigate();

  async function fetchdata() {
    // const headers =  {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    const authToken = localStorage.getItem('token');
    const parseddata = await Axios.get(`${Api}verify`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
      // "Content-Type": "application/json",
    });
    if (!parseddata.data.token) {
      navigate('/');
    }
    console.log('Api is :- ', Api);
    console.log(parseddata);
    // setAuth(!parseddata.data.success);
    console.log('Useeffet :- ', parseddata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return <>{auth ? <Mainform /> : `OTP not found`}</>;
};

export default OTPVerify;
