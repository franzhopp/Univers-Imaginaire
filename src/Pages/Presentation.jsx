import React from "react";
import "../Styles/Presentation.css";
import { Link } from "react-router-dom";
import Form from "./Form";
import Theme from "../hook/useTheme.jsx";

const Presentation = () => {
  return (
    <>
      <div className="container">
        <div className="sub-home">
          <p className="title-home">Bienvenue dans l'ode de mon imagination,</p>
          <Theme/>
          <p className="active title-link">8 AOÛT 2023</p>
          <p className="desc-home">
            Je te laisse découvrir mes secrets où règne la volonté de poursuivre
            son rêve, ainsi que sa force d'écrire pour combattre contre
            l'ignorance des Hommes. L'éveil est le pouvoir de l'imaginaire,
            unissant les cœurs les plus humbles.{" "}
            <span className="one-text">
              L'imagination est l'expression de l'âme
            </span>
            .
          </p>
          <div className="links-prod">
            <Link
              to="https://ldwso.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="active title-link"
            >
              Portfolio.
            </Link>
            <p className="active title-link">LDWSO (en production).</p>
          </div>
          <div className="line"></div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Presentation;
