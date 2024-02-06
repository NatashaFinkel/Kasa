import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Les autres routes seront là ! */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
