import React from 'react';
import Navbar from '../../../Components/Navbar';

const DashboadComponent = ({ details }) => {
  console.log(details.userInfo);
  return (
    <>
      <Navbar
        userImage={details.userInfo.pimage}
        userNameText={details.userInfo.name}
      />
      <div className='home-main'>
        <h1>You are Verified and Authorized Welcome to Dashboard Route</h1>
      </div>
      <br />
      <img src={details.userInfo.pimage} alt='' />
      <h2>Your UID is : {details.userInfo.uid}</h2>
      <h2>Your Name is : {details.userInfo.name}</h2>
    </>
  );
};

export default DashboadComponent;
