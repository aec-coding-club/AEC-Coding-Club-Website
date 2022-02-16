import React from 'react';
import errorPage from '../Assets/404-error.png';
import Navbar from '../Components/Navbar';
import './styles/Error.css';

const Errorpage = () => {
  return (
    <>
      <Navbar />
      <div className='error-main'>
        <img className='error-image' alt='' src={errorPage}></img>
        <h1 className='error-message'>404 | Page Can't Be Found</h1>
      </div>
    </>
  );
};

export default Errorpage;
