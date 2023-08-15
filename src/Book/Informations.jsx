import React from "react";
import "../Styles/Book.css";
import { NavLink } from 'react-router-dom';
import Navbar from "../Header/Navbar.jsx";

const Texts = () => {
  return (
    <>
      <div className="fade-in">
        <Navbar />
        <div className="container-book">
          <div className="sub-book">
            <div className="sub-image-book">
              <div className="image-book"></div>
            </div>
            <div className="title-texts">A hero but not heroes</div>
            <p className="desc-texts">
              — Chapitre n°1 |{" "}
              <NavLink to="/chapter-one">
                Issue Secrète
              </NavLink>
            </p>
            <p className="active title-link date-text">8 AOÛT 2023</p>
            <p className="desc-texts">
              Histoire en écriture : 60%.
              <div class="loader"></div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texts;
