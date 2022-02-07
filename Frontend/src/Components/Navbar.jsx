import React, { Component, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'

import Logo from '../Assets/logo.svg'
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
        <button className='btn sign-up'>Sign Up</button>
        <button className='btn sign-in'>Sign In</button>
      </div>
      <div className='menu-toggle-icon' onClick={() => handleSideBar(true)}>
        <FaBars />
      </div>
      {/* CSS CURVE [FROM shapedivider.app] */}
      <div className='custom-shape-divider-top-1644172493'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            d='M0,32L40,64C80,96,160,160,240,197.3C320,235,400,245,480,234.7C560,224,640,192,720,170.7C800,149,880,139,960,144C1040,149,1120,171,1200,192C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <SideBar sidebarOpen={sidebarOpen} handleSideBar={handleSideBar} />
    </nav>
  )
}

export default Navbar
