import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import "../Styles/Themes.css";

const Themes = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <div className="container-button">
      <div className={isDarkMode ? "dark-theme" : "light-theme"}>
        <button
          onClick={toggleTheme}
          className={`custom-button-theme ${isDarkMode ? "dark" : ""}`}
        >
          {isDarkMode ? "" : ""}
          <div className="icons">
            {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Themes;
