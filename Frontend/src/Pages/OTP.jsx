import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Api } from '../backend';
import otpImg from '../Assets/otp.png';
import Otpforum from './Components/Otpforum';
import './styles/SigninSignup.css';

const Mainform = () => {
  return (
    <>
      <div className='user-login'>
        <div className='user-img'>
          <img alt='' src={otpImg}></img>
        </div>
        <Otpforum />
      </div>
    </>
  );
};

const Otpverify = () => {
  const [auth, setAuth] = useState(true);
  let navigate = useNavigate();

  async function fetchdata() {
    const authToken = localStorage.getItem('token');
    const parseddata = await Axios.get(`${Api}verify`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
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
export default Otpverify;
