import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Events from './Pages/Events'
import Members from './Pages/Members'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Otpverify from './Pages/OTP'
import Dashboard from './Pages/Dashboard-Secure'
import Errorpage from './Pages/Errorpage'
import './App.css'
import { Api } from './backend'
import UserContext from './Pages/Context/LoggedUserContext'

// toastify - for errs, messages
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getFromLocalStorage = () => {
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')
  const pimage = localStorage.getItem('pimage')
  if (!token) return null
  else return [token, name, pimage]
}

const App = () => {
  const [tokenChecker, setTokenChecker] = useState(getFromLocalStorage())

  return (
    <>
      {/* <UserContext.Provider value={userdata}> */}
      <Router>
        {tokenChecker ? (
          <Navbar userImage={tokenChecker[2]} userNameText={tokenChecker[1]} />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/events'
            element={<Events tokenChecker={tokenChecker} />}
          />
          <Route exact path='/members' element={<Members />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/verify' element={<Otpverify />} />
          <Route
            exact
            path='/dashboard'
            element={<Dashboard tokenChecker={tokenChecker} />}
          />
          <Route exact path='*' element={<Errorpage />} />
        </Routes>
      </Router>
      <ToastContainer />
      {/* </UserContext.Provider> */}
    </>
  )
}

export default App
