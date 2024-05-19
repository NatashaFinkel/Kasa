import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Image from "./Image";
import logoKasa from "../assets/logo-kasa.png";
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";
import HousePreview from "../pages/HousePreview";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";

//  Ce fichier permet
//  de naviguer entre
//  les différentes pages
//  de l'application.

const AppRouter = () => {
  return (
    <Router>
      <div className="header-display">
        <Image src={logoKasa} className="logo-kasa" alt="Logo" />
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/houses/:id" element={<HousePreview />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
