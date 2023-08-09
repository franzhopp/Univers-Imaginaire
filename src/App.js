// Router :
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS :
import "./Styles/Main.css";

// Components :
import Home from "./Pages/Home.jsx";
import Texts from "./Rewrite/Texts.jsx";
import Book from "./Book/Informations";
import React from "react";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/my-texts" element={<Texts/>} />
              <Route path="/coming-soon" element={<Book />} />
          </Routes>
      </Router>

  );
}

export default App;
