import React from 'react';

import './styles/MemberFilter.css';

const MemberFilter = ({ memberFilter, handleMemberFilter }) => {
  return (
    <div className='member-filter'>
      <button
        className={`btn all ${memberFilter === 'all' ? 'selected' : ''}`}
        onClick={() => handleMemberFilter('all')}
      >
        All
      </button>
      <button
        className={`btn core ${memberFilter === 'core' ? 'selected' : ''}`}
        onClick={() => handleMemberFilter('core')}
      >
        Core Committee
      </button>
      <button
        className={`btn sub ${memberFilter === 'sub' ? 'selected' : ''}`}
        onClick={() => handleMemberFilter('sub')}
      >
        Sub Committee
      </button>
    </div>
  );
};

export default MemberFilter;
