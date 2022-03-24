import React, { useContext, useEffect, useState } from 'react'

import './styles/Members.css'
import Navbar from '../Components/Navbar'
import MemberFilter from '../Components/MemberFilter'
import MembersContainer from '../Components/MembersContainer'
import UserContext from './Context/LoggedUserContext'

const Members = () => {
  const [memberFilter, setMemberFilter] = useState('all')

  function handleMemberFilter(selectedFilter) {
    setMemberFilter(selectedFilter)
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
        <h3 className='teacher-header'>Teacher Coordinators</h3>
        <div className='teacher-wrapper'>
          <div className='teacher-container'>
            <div className='teacher-img'>
              <img
                src='https://res.cloudinary.com/sahebcloud/image/upload/v1647626528/125117693_357780665522683_8638435484497410468_n_osozlr.jpg'
                alt='teacher'
              />
            </div>
            <p className='teacher-name'>Sudip Kumar De</p>
            <p className='teacher-designation'>Assistant proffesor, IT</p>
          </div>
          <div className='teacher-container'>
            <div className='teacher-img'>
              <img
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='teacher'
              />
            </div>
            <p className='teacher-name'>Dr. Anup Mukhopadhyay</p>
            <p className='teacher-designation'>HOD, IT</p>
          </div>
          <div className='teacher-container'>
            <div className='teacher-img'>
              <img
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='teacher'
              />
            </div>
            <p className='teacher-name'>Biplab Mondal</p>
            <p className='teacher-designation'>Assistant proffesor, IT</p>
          </div>
        </div>
        <MemberFilter
          memberFilter={memberFilter}
          handleMemberFilter={handleMemberFilter}
        />
        <MembersContainer memberFilter={memberFilter} />
      </main>
    </>
  )
}

export default Members
