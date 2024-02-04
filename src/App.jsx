import React from "react";
import "./index.css";

import HeaderLogo from "./HeaderLogo";
import Footer from "./Footer";
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
