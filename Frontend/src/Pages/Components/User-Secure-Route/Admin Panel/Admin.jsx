import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Api } from '../../../../backend'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import './Styles/admin-index.css'

const Admin = ({ userImage, userNameText }) => {
  const [userId, setUserId] = useState(null)

  const navigate = useNavigate()

  const fetchLogs = async () => {
    // Check Role for redirects
    const token = localStorage.getItem('token')
    if (!token) window.location = '/'
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!parseddata) navigate('/')
    setUserId(parseddata.data.user_data.uid)
    if (parseddata.data.user_data.role <= 2) navigate('/dashboard')
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  return (
    <>
      <div className='admin-details'>
        <div className='left'>
          <img
            src={userImage}
            alt='user-image'
            className='admin-user-img logged-user-image'
          />
          <div className='user-details'>
            <p className='logged-user logged-user-text'>
              <span>Name: </span>
              {userNameText}
            </p>
            <p className='logged-user logged-user-id'>
              <span>UID: </span>
              <span className='admin-uid'>
                {userId ? userId : 'Loading...'}
              </span>
            </p>
          </div>
        </div>
        <h2>Welcome to Admin Panel</h2>
      </div>

      <div className='admin-nav'>
        <NavLink to='/admin/overview' className='admin-nav-link'>
          Overview
        </NavLink>
        <NavLink to='/admin/admin-users' className='admin-nav-link'>
          Users
        </NavLink>
        <NavLink to='/admin/admin-events' className='admin-nav-link'>
          Events
        </NavLink>
        <NavLink to='/admin/admin-logs' className='admin-nav-link'>
          Logs
        </NavLink>
        <NavLink to='/admin/admin-stats' className='admin-nav-link'>
          Stats
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default Admin

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Api } from '../../../../backend'
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   Tooltip,
// } from 'recharts'

// const Index = () => {
//   const linedata = [
//     {
//       name: 'Java',
//       students: 15,
//       fees: 10,
//     },
//     {
//       name: 'Python',
//       students: 26,
//       fees: 35,
//     },
//     {
//       name: 'C++',
//       students: 11,
//       fees: 6,
//     },
//     {
//       name: 'Javascript',
//       students: 41,
//       fees: 25,
//     },
//     {
//       name: 'C',
//       students: 18,
//       fees: 10,
//     },
//     {
//       name: 'GoLang',
//       students: 14,
//       fees: 10,
//     },
//   ]

//   const [logData, setLogData] = useState([])
//   const [number, setNumber] = useState()
//   const [loading, setLoading] = useState(false)

//   const fetchLogs = async () => {
//     setLoading(true)
//     const authToken = localStorage.getItem('token')
//     const data = await axios.get(`${Api}logger`, {
//       withCredentials: true,
//       headers: { Authorization: `Bearer ${authToken}` },
//     })
//     console.log('data: ', data)
//     setLogData(await data.data.logs)
//     setLoading(false)
//   }

//   useEffect(() => {
//     fetchLogs()
//   }, [])

//   return (
//     <>
//       <h2>Admin Panel</h2>
//       <br />
//       <div>
//         {loading ? (
//           <p>Loading</p>
//         ) : (
//           <ul>
//             {logData.map((data) => (
//               <li key={data._id}>{data.Operation}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <ResponsiveContainer width='100%' aspect={2}>
//         <LineChart
//           data={linedata}
//           width={100}
//           height={100}
//           margin={{ top: 10, left: 10, bottom: 0, right: 50 }}
//         >
//           <CartesianGrid strokeDasharray='3 15' />
//           <XAxis dataKey='name' interval={'preserveStartEnd'} />
//           <YAxis />
//           <Tooltip contentStyle={{ backgroundColor: 'black' }} />
//           <Legend />
//           <Line
//             type='monotone'
//             dataKey='students'
//             stroke='#EAE2B7'
//             legendType='wye'
//             activeDot={{ stroke: 'red', strokeWidth: 2, r: 7 }}
//             strokeWidth={5}
//           />
//           <Line
//             type='monotone'
//             dataKey='fees'
//             stroke='#D93E39'
//             activeDot={{ r: 7 }}
//             strokeWidth={3}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </>
//   )
// }

// export default Index
