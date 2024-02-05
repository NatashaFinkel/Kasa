import React from "react";
import "./App.scss";

import HeaderLogo from "./HeaderLogo";
import Footer from "../src/components/footer/Footer";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div>
      {/* Il faut faire 
      le reste du header !  */}
      <HeaderLogo />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
