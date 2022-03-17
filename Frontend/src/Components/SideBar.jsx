import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import './styles/SideBar.css'

function SideBar({
  sidebarOpen,
  handleSideBar,
  tokenChecker,
  userImg,
  userNameText,
  userRole,
}) {
  const navigate = useNavigate()

  function hideSidebar() {
    handleSideBar(false)
  }

  function signOut() {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className={`nav-sidebar ${sidebarOpen ? 'open' : 'close'}`}>
      <div className='menu-close' onClick={() => handleSideBar(false)}>
        <FaTimes />
      </div>
      <div className='sidebar-main'>
        {tokenChecker ? (
          <div className='sidebar-btn-wrapper'>
            <img className='logged-user-image' src={userImg} />
            <NavLink
              to={userRole <= 2 ? '/dashboard' : '/admin'}
              className='nav-link'
              onClick={hideSidebar}
            >
              <div
                className='user-name-text'
                style={{ textDecoration: 'none', color: '#D62828' }}
              >
                {userNameText}
              </div>
            </NavLink>
            <button className='btn sign-in' onClick={signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className='sidebar-btn-wrapper'>
            <button
              className='btn sign-up'
              onClick={() => {
                navigate('/signup')
                hideSidebar()
              }}
            >
              Sign Up
            </button>
            <button
              className='btn sign-in'
              onClick={() => {
                navigate('/signin')
                hideSidebar()
              }}
            >
              Sign In
            </button>
          </div>
        )}
        <div className='sidebar-link-wrapper'>
          <NavLink to='/' className='nav-link' onClick={hideSidebar}>
            Home
          </NavLink>
          <NavLink to='/events' className='nav-link' onClick={hideSidebar}>
            Events
          </NavLink>
          <NavLink to='/members' className='nav-link' onClick={hideSidebar}>
            Members
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SideBar
