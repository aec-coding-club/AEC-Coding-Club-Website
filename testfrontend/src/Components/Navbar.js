import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../Context/authContext';

const Navbar = () => {
  const data = useContext(authContext);
  console.log('Context data :- ', data);

  const SubcompoA = () => {
    return (
      <li>
        <Link to='/register'>Sign Out</Link>
      </li>
    );
  };
  const SubcompoB = () => {
    return (
      <>
        <li>
          <Link to='/register'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Sign In</Link>
        </li>
      </>
    );
  };
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/events'>Events</Link>
        </li>
        <li>
          <Link to='/members'>Members</Link>
        </li>
        {data[0] ? <SubcompoA /> : <SubcompoB />}
      </ul>
    </>
  );
};

export default Navbar;
