import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
            <li><Link to="/login">Sign In</Link></li>
        </ul>
    </>
  );
};

export default Navbar;
