import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Members from "./Pages/Members";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import Otpverify from "./Pages/OTPVerify";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/verify" element={<Otpverify />} />
          <Route exact path="/dashboardtry" element={<Dashboard />}/>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
