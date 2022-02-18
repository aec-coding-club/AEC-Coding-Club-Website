import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

import Logo from "../Assets/logo.svg";
import UserImage from "../Assets/members/member.png"
import NavbarSvg from "../Assets/navbarsvg.svg";
import SideBar from "./SideBar";
import Cookies from 'js-cookie'
import "./styles/Navbar.css";

const NavCompoA = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='nav-btn-wrapper'>
        <button className='btn sign-up' onClick={() => navigate('/signup')}>
          Sign Up
        </button>
        <button className='btn sign-in' onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
    </>
  );
};

const NavCompoB = ({userImg, userNameText}) => {
  const navigate = useNavigate();
  console.log(userNameText);
  return (
    <>
      <div className="nav-btn-wrapper">
        <img className="logged-user-image" src={userImg} />
        <div className="user-name-text">{userNameText}</div>
        <button className="btn sign-in">
          Sign Out
        </button>
      </div>
    </>
  );
};

const Navbar = ({ userImage, userNameText }) => {
  const [tokenChecker, setTokenChecker] = useState(false);
  const checkToken = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      setTokenChecker(true);
    }
  };
  // @TODO: Add user styles and pop up Component

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  function handleSideBar(sidebarState) {
    setSidebarOpen(sidebarState);
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <nav>
      <div className='logo' onClick={() => navigate('/')}>
        <img src={Logo} alt='AECCC-LOGO' className='logo-image' />
        <div className='logo-text'>
          <p className='logo-name'>aec coding club</p>
          <p className='logo-motto'>Always Top Of The Heap</p>
        </div>
      </div>
      <div className='nav-link-wrapper'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/events' className='nav-link'>
          Events
        </NavLink>
        <NavLink to='/members' className='nav-link'>
          Members
        </NavLink>
      </div>
      {tokenChecker ? (
        <NavCompoB userImg={userImage} userNameText={userNameText} />
      ) : (
        <NavCompoA />
      )}

      <div className='menu-toggle-icon' onClick={() => handleSideBar(true)}>
        <FaBars />
      </div>
      <SideBar sidebarOpen={sidebarOpen} handleSideBar={handleSideBar} />
      {/* <div className='nav-curve-wrapper'>
        <img src={NavbarSvg} alt='curve' />
      </div> */}
    </nav>
  );
};

export default Navbar;
