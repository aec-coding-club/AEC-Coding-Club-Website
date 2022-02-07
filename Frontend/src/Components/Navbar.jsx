import React, { Component, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../Assets/logo.svg";
import SideBar from "./SideBar";
import "./styles/Navbar.css";

const Navbar = () => {
  // @TODO: Add user styles and pop up Component

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  function handleSideBar(sidebarState) {
    setSidebarOpen(sidebarState);
  }

  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="AECCC-LOGO" className="logo-image" />
        <div className="logo-text">
          <p className="logo-name">aec coding club</p>
          <p className="logo-motto">Always Top Of The Heap</p>
        </div>
      </div>
      <div className="nav-link-wrapper">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/events" className="nav-link">
          Events
        </NavLink>
        <NavLink to="/members" className="nav-link">
          Members
        </NavLink>
      </div>
      <div className="nav-btn-wrapper">
        <button className="btn sign-up">
          <NavLink to="/signup">Sign Up</NavLink>
        </button>
        <button className="btn sign-in">
          <NavLink to="/signin">Sign In</NavLink>
        </button>
      </div>
      <div className="menu-toggle-icon" onClick={() => handleSideBar(true)}>
        <FaBars />
      </div>
      {/* CSS CURVE [FROM shapedivider.app] */}
      <div className="custom-shape-divider-top-1644172493">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <SideBar sidebarOpen={sidebarOpen} handleSideBar={handleSideBar} />
    </nav>
  );
};

export default Navbar;
