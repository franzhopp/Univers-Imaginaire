import React from "react";
import "../Styles/Home.css";
import Navbar from "../Header/Navbar";
// import Audio from "../Audio/Music.jsx";
import Presentation from "../Pages/Presentation.jsx";

const Home = () => {
  return (
    <>
      <div className="fade-in">
        <Navbar />
        {/* <Audio/> */}
        <Presentation />
      </div>
    </>
  );
};

export default Home;
