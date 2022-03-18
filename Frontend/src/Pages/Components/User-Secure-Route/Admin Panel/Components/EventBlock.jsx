import React from "react";

const EventBlock = ({ eventdetails }) => {
  return (
    <>
      <div className="event-block">
        <img className="event-profile" src={eventdetails.eventImage} />
        <p>{eventdetails.eventTitle}</p>
        <div className="user-aeccc-info">
          <p className="user-id">
            <b>Event Date :</b> <span className="user-uid">{eventdetails.eventTime.split("T")[0]}</span>
          </p>
          <p className="user-role">
            <b>Participants :</b> {eventdetails.userId.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default EventBlock;
