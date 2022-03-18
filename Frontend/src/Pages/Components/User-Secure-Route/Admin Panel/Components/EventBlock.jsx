import React from 'react'

const EventBlock = ({eventdetails}) => {
  return (
    <>
        <h1>{eventdetails.eventTitle}</h1>
        <h2>{eventdetails.eventTime.split("T")[0]}</h2>
        <h3>{eventdetails.userId.length}</h3>
    </>
  )
}

export default EventBlock