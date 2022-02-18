import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import UserContext from './Context/LoggedUserContext';
import './styles/Home.css';

const Home = () => {
  const details = useContext(UserContext);
  console.log('details', details);
  const [tokenChecker, setTokenChecker] = useState(false);
  const checkToken = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      setTokenChecker(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {tokenChecker ? (
        <Navbar
          userImage={details.userInfo.pimage}
          userNameText={details.userInfo.name}
        />
      ) : (
        <Navbar />
      )}
      {/* <Navbar userImage={details.userInfo.pimage} userNameText={details.userInfo.name}/> */}
      <main className='home-main'>
        <h1>Home Page</h1>
      </main>
    </>
  );
};

export default Home;
