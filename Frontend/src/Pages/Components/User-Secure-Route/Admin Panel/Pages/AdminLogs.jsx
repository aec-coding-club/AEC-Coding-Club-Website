import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Api } from '../../../../../backend'
import ReactPaginate from 'react-paginate'

import Log from '../Components/Log'

import '../Styles/admin-logs.css'

const AdminLogs = () => {
  const [logData, setLogData] = useState([])
  const [loading, setLoading] = useState(false)

  // for pagination
  const [pageCount, setPageCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(0)
  const logsPerPage = 10
  const logsVisited = pageNumber * logsPerPage

  const displayLogs = logData
    .slice(logsVisited, logsVisited + logsPerPage)
    .map((log) => {
      return <Log log={log} key={log._id} />
    })

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const fetchLogs = async () => {
    // fetch data for admin page
    setLoading(true)
    const authToken = localStorage.getItem('token')
    const data = await axios.get(`${Api}logger`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    })
    console.log('data: ', data)
    setLogData(await data.data.logs)
    setPageCount(Math.ceil(data.data.logs.length / logsPerPage))
    setLoading(false)
  }

  useEffect(() => {
    fetchLogs()
    if (logData.length > 0)
      setPageCount(Math.ceil(logData.length / logsPerPage))
  }, [])

  return (
    <div className='admin-container'>
      <h3>Activity Feed (LOGS)</h3>
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <div className='log-data-container'>{displayLogs}</div>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AdminLogs
