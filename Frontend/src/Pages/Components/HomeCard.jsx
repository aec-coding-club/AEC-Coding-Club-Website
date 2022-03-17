import React from "react";
import Trophy from "../../Assets/home/trophy.png";

const HomeCard = (props) => {
  const { img, name, position, dept, year, event } = props.data;

  return (
    <div className='cards'>
      <div className='cards-content'>
        <div className='trophy'>
          <img src={Trophy}></img>
        </div>

        <div className='details'>
          <h3>{position}</h3>
          <h4>{name}</h4>
          <span>
            {dept} ~ {year}
          </span>

          <br />
          <span>{event}</span>
        </div>

        <div>
          <img src={img}></img>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
