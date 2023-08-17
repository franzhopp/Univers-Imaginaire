import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const valuesThemes = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={valuesThemes}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
