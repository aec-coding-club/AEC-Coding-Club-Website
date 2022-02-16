import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/MembersContainer.css';
import members from '../data/members.json';
import MemberCard from './MemberCard';

const MembersContainer = ({ memberFilter }) => {
  let allMembers;
  if (memberFilter === 'all') {
    allMembers = members.map((member) => {
      return (
        <MemberCard
          member={member}
          memberFilter={memberFilter}
          key={uuidv4()}
        />
      );
    });
  } else if (memberFilter === 'core') {
    allMembers = members
      .filter((member) => member.role === 2 || member.role === 3)
      .map((member) => {
        return (
          <MemberCard
            member={member}
            memberFilter={memberFilter}
            key={uuidv4()}
          />
        );
      });
  } else if (memberFilter === 'sub') {
    allMembers = members
      .filter((member) => member.role === 1)
      .map((member) => {
        return (
          <MemberCard
            member={member}
            memberFilter={memberFilter}
            key={uuidv4()}
          />
        );
      });
  }

  return <div className='members-container'>{allMembers}</div>;
};

export default MembersContainer;
