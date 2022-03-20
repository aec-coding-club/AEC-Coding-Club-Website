import React, { useContext, useEffect, useState } from 'react';

import './styles/Members.css';
import Navbar from '../Components/Navbar';
import MemberFilter from '../Components/MemberFilter';
import MembersContainer from '../Components/MembersContainer';
import UserContext from './Context/LoggedUserContext';

const Members = () => {
  const [memberFilter, setMemberFilter] = useState('all');

  function handleMemberFilter(selectedFilter) {
    setMemberFilter(selectedFilter);
  }

  // const details = useContext(UserContext);
  // //console.log('details', details);
  // const [tokenChecker, setTokenChecker] = useState(false);
  // const checkToken = () => {
  //   const token = localStorage.getItem('token');
  //   //console.log(token);
  //   if (token) {
  //     setTokenChecker(true);
  //   }
  // };

  // useEffect(() => {
  //   checkToken();
  // }, []);

  return (
    <>
      {/* {tokenChecker ? (
        <Navbar
          userImage={details.userInfo.pimage}
          userNameText={details.userInfo.name}
        />
      ) : (
        <Navbar />
      )} */}
      <main className='members'>
        <header className='members-header'>
          <h1>The Team</h1>
          <p>
            At AECCC, we truly value what each member brings to the table. Among
            us are mobile-app developers, web developers, system administrators,
            software enthusiasts, algorithmic coders and open source software
            contributors.
          </p>
        </header>
        <hr />
        <MemberFilter
          memberFilter={memberFilter}
          handleMemberFilter={handleMemberFilter}
        />
        <MembersContainer memberFilter={memberFilter} />
      </main>
    </>
  );
};

export default Members;
