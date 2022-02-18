import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Members from './Pages/Members';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Otpverify from './Pages/OTP';
import Dashboard from './Pages/Dashboard-Secure';
import Errorpage from './Pages/Errorpage';
import './App.css';
import { Api } from './backend';
import UserContext from './Pages/Context/LoggedUserContext';

const App = () => {
  const [userdata, setUserdata] = useState({});

  async function fetchdata() {
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
    });
    // if(!parseddata.data.token){
    //   console.log("Navigating");
    //   navigate("/");
    // }
    console.log(parseddata);
    setUserdata({
      userInfo: parseddata.data.user_data,
    });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <UserContext.Provider value={userdata}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/members' element={<Members />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/signin' element={<Signin />} />
            <Route exact path='/verify' element={<Otpverify />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='*' element={<Errorpage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
