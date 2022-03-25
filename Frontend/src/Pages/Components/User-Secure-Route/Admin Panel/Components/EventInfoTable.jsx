import React from 'react'

import '../Styles/event-info-table.css'

const EventInfoTable = ({ eventData }) => {
  const tBodyContent = eventData.map((data) => (
    <tr>
      <td data-label='slNo'>{data.slNo}</td>
      <td data-label='email'>{data.email}</td>
      <td data-label='userId'>{data.userId}</td>
      <td data-label='name'>{data.name}</td>
    </tr>
  ))

  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Email</th>
            <th>UserID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{tBodyContent}</tbody>
      </table>
    </div>
  )
}

export default EventInfoTable
