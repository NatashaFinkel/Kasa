import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderLogo from "./components/header/HeaderLogo";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

const AppRouter = () => {
  return (
    <Router>
      <div className="header-display">
        <HeaderLogo />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Il faudra mettre la page Erreur 404 ici ! */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
