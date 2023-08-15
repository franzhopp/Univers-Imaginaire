import React from "react";
import "../Styles/Home.css";

import Navbar from "../Header/Navbar";
import Presentation from "../Pages/Presentation.jsx";

const Home = () => {
  return (
    <>
      <div className="fade-in">
        <Navbar />
        <Presentation />
      </div>
    </>
  );
};

export default Home;
