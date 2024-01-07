import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="sub-items">
          <div className="sub-titles">
            <div className="title">A.L —,</div>
            <div className="author">
              par <p className="colors-others">Ohsion</p>.
            </div>
          </div>

          <div className="links">
            <NavLink to="/" className="active title-link">
              <FontAwesomeIcon icon={faHouse} className="icon" /> Accueil
            </NavLink>
            <NavLink to="/my-texts" className="active title-link">
              <FontAwesomeIcon icon={faPenNib} className="icon" /> Mes écrits
            </NavLink>
            <NavLink to="/coming-soon" className="active title-link">
              <FontAwesomeIcon icon={faBook} className="icon" /> Mon prochain
              livre
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
