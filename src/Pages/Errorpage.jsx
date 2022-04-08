import React from 'react';
import errorPage from '../Assets/404-error.svg';
import Navbar from '../Components/Navbar';
import './styles/Error.css';

const Errorpage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='error-main'>
        <img className='error-image' alt='' src={errorPage}></img>
      </div>
    </>
  );
};

export default Errorpage;
