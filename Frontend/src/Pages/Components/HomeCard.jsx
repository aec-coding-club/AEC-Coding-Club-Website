import React from "react";

const HomeCard = (props) => {
  const { img, name, position, dept, year, event } = props.data;

  return (
    <div className='card'>
      <div className='top'>
        <h3>{position}</h3>
      </div>
      <img src={img} />
      <div className='bottom'>
        <h3>{name}</h3>
        <span>{dept} ~ </span>
        <span>{year}</span>
        <br />
        <span>{event}</span>
      </div>
    </div>
  );
};

export default HomeCard;
