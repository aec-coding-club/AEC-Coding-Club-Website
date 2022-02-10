import React, { Component, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'

import Logo from '../Assets/logo.svg'
import NavbarSvg from '../Assets/navbarsvg.svg'
import SideBar from './SideBar'
import './styles/Navbar.css'

const Navbar = () => {
  // @TODO: Add user styles and pop up Component

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  function handleSideBar(sidebarState) {
    setSidebarOpen(sidebarState)
  }

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
      <div className='nav-btn-wrapper'>
        <button className='btn sign-up' onClick={() => navigate('/signup')}>
          Sign Up
        </button>
        <button className='btn sign-in' onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
      <div className='menu-toggle-icon' onClick={() => handleSideBar(true)}>
        <FaBars />
      </div>
      <SideBar sidebarOpen={sidebarOpen} handleSideBar={handleSideBar} />
      {/* <div className='nav-curve-wrapper'>
        <img src={NavbarSvg} alt='curve' />
      </div> */}
    </nav>
  )
}

export default Navbar
