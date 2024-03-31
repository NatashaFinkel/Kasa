import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import House from "../pages/House";
import About from "../pages/About";
import Error from "../pages/Error";

//  Ce fichier permet 
//  de naviguer entre 
//  les différentes pages 
//  de l'application.

const AppRouter = () => {
  return (
    <Router>
      <div className="header-display">
        <HeaderLogo />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
