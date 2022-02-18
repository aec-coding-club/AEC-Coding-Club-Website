import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../backend';
import DashboadComponent from './Components/User-Secure-Route/Dashboad';
import './styles/Home.css';

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [userdata, setUserdata] = useState({});
  let navigate = useNavigate();

  async function fetchdata() {
    const authToken = localStorage.getItem('token');
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (!parseddata.data.token) {
      console.log('Navigating');
      navigate('/');
    }
    console.log(Api);
    console.log(parseddata);
    setUserdata({
      userInfo: parseddata.data.user_data,
    });
    setAuth(parseddata.data.token);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {auth ? (
        <DashboadComponent details={userdata} />
      ) : (
        `Dashboard can't be Accessed`
      )}
    </>
  );
};

export default Home;
