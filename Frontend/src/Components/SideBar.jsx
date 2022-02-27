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
}) {
  const navigate = useNavigate()
  const [sidebarClass, setSidebarClass] = useState('nav-sidebar')

  useEffect(() => {
    if (sidebarOpen) setSidebarClass('nav-sidebar open')
    else setSidebarClass('nav-sidebar close')
  }, [sidebarOpen])

  function signOut() {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className={sidebarClass}>
      <div className='menu-close' onClick={() => handleSideBar(false)}>
        <FaTimes />
      </div>
      <div className='sidebar-main'>
        {tokenChecker ? (
          <div className='sidebar-btn-wrapper'>
            <img className='logged-user-image' src={userImg} />
            <NavLink to='/dashboard' className='nav-link'>
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
            <button className='btn sign-up' onClick={() => navigate('/signup')}>
              Sign Up
            </button>
            <button className='btn sign-in' onClick={() => navigate('/signin')}>
              Sign In
            </button>
          </div>
        )}
        <div className='sidebar-link-wrapper'>
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
      </div>
    </div>
  )
}

export default SideBar
