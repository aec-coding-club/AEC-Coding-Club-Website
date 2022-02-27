import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Api } from "../backend";
import DashboadComponent from "./Components/User-Secure-Route/Dashboad";
import "./styles/Home.css";

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [successDecision, setSuccessDecision] = useState(false);
  const [userdata, setUserdata] = useState({});
  let navigate = useNavigate();

  async function fetchdata() {
    const authToken = localStorage.getItem("token");
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (!parseddata.data.token) {
      console.log("Navigating1");
      navigate("/");
    }
    
    console.log(Api);
    console.log("Parsed data :- ", parseddata);
    setUserdata({
      userInfo: parseddata.data.user_data,
    });
    setAuth(parseddata.data.token);
    setSuccessDecision(parseddata.data.success)
    if(!parseddata.data.success){
      console.log("Navigating2");
      navigate("/verify");
    }
  }

  useEffect(() => {
    fetchdata();
    console.log("Token" , auth);
    console.log("Success", successDecision);
  }, []);

  return (
    <>
      {auth && successDecision ? (
        <DashboadComponent details={userdata} />
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default Home;
