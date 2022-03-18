import React from "react";

const EventBlock = ({ eventdetails }) => {
  return (
    <>
      <div className="event-block">
        <img className='event-profile' src={eventdetails.eventImage} />
        <p>{eventdetails.eventTitle}</p>
        <p>{eventdetails.eventTime.split("T")[0]}</p>
        <p>{eventdetails.userId.length}</p>
      </div>
    </>
  );
};

export default EventBlock;
