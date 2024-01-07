// Router :
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS :
import "./Styles/Main.css";

// Components :
import Home from "./Pages/Home.jsx";
import Texts from "./Rewrite/Texts.jsx";
import Book from "./Book/Informations.jsx";
import Chapter from "./Chapter/StoryOne.jsx";
import React from "react";

// Theme Dark and Light
import ThemeProvider from "./context/ThemeProvider.jsx";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mytexts" element={<Texts />} />
                    <Route path="/comingsoon" element={<Book />} />
                    <Route path="/chapterone" element={<Chapter />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
