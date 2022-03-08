import React from "react";
import "./styles/Numbers.css";

const Numbers = () => {
  return (
    <>
      <h2 className='aeccc-numbers-heading'>Some count that matters</h2>
      <div className='aeccc-count-container'>
        <div className='count-box'>
          <p id='downloads__count'>1000+</p>
          <p id='downloads__description'>Members</p>
        </div>
        <div className='count-box'>
          <p id='discord__count'>50+</p>
          <p id='discord__description'>Workshops</p>
        </div>
        <div className='count-box'>
          <p id='contri__count'>30+</p>
          <p id='contri__description'>Events</p>
        </div>
        <div className='count-box'>
          <p id='programs__count'>3+</p>
          <p id='programs__description'>Hackathons</p>
        </div>
      </div>
    </>
  );
};

export default Numbers;
