import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import authContext from "../Context/authContext";

const Home = () => {
  const data = useContext(authContext)
  console.log(data);
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
    </>
  );
};

export default Home;