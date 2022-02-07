import React, { useState } from 'react'

import './styles/Members.css'
import Navbar from '../Components/Navbar'
import MemberFilter from '../Components/MemberFilter'
import MembersContainer from '../Components/MembersContainer'

const Members = () => {
  const [memberFilter, setMemberFilter] = useState('all')

  function handleMemberFilter(selectedFilter) {
    setMemberFilter(selectedFilter)
  }

  return (
    <>
      <Navbar />
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
  )
}

export default Members
