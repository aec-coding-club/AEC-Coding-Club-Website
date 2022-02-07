import React, { useState, useEffect } from 'react'

import { FaTimes } from 'react-icons/fa'

import './styles/SideBar.css'

function SideBar({ sidebarOpen, handleSideBar }) {
  const [sidebarClass, setSidebarClass] = useState('nav-sidebar')

  useEffect(() => {
    if (sidebarOpen) setSidebarClass('nav-sidebar open')
    else setSidebarClass('nav-sidebar close')
  }, [sidebarOpen])

  return (
    <div className={sidebarClass}>
      <div className='menu-close' onClick={() => handleSideBar(false)}>
        <FaTimes />
      </div>
      <div className='sidebar-main'>
        <div className='sidebar-btn-wrapper'>
          <button className='btn sign-up'>Sign Up</button>
          <button className='btn sign-in'>Sign In</button>
        </div>
        <div className='sidebar-link-wrapper'>
          <p>Home</p>
          <p>Events</p>
          <p>Members</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
