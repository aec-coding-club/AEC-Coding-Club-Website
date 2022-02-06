import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Events from './Pages/Events'
import Members from './Pages/Members'

import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/members' element={<Members />} />
          {/* @TODO: add a 404 page */}
        </Routes>
      </Router>
    </>
  )
}

export default App
