import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

import DefaultImg from '../Assets/members/member.png';
import './styles/MemberCard.css';

const MemberCard = ({ member }) => {
  const { img, name, linkedin, github, additional } = member;
  return (
    <div className='member-card'>
      <div className='card-img-container'>
        <img
          src={img ? img : DefaultImg}
          alt='member-profile-img'
          className='card-img'
        />
      </div>
      <h3 className='card-name'>{name}</h3>
      {(linkedin || github || additional) && (
        <div className='card-links'>
          {linkedin && (
            <a
              href={linkedin}
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          )}
          {github && (
            <a
              href={github}
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          )}
          {additional && (
            <a
              href={additional}
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGlobe />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MemberCard;
