import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Api } from "../backend";
import DummyComponent from "../Components/DummyComponent";

function Dashboard() {
  const [auth, setAuth] = useState(false)
  let navigate = useNavigate();


  async function fetchdata() {
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
    });
    if(!parseddata.data.token){
      console.log("Navigating");
      navigate("/");
    }
    console.log(Api);
    console.log(parseddata);
    setAuth(parseddata.data.token);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return(
    <>
      {auth ? <DummyComponent/> : `Welcome to the Dashboard`}
    </>
  )
}

export default Dashboard;
