import React from "react";
import "./App.scss";

import HeaderLogo from "./HeaderLogo";
import AppRouter from "./AppRouter";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      {/* Il faut faire 
      le reste du header !  */}
      <div className="Nanana">
        <HeaderLogo />
        <AppRouter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
