import React from "react";
import AppRouter from "./AppRouter";
import AppFooter from "./Footer.jsx";
import "../styles/_app.scss";

const App = () => {
  return (
    <div>
      
      <div className="main-padding">
        <AppRouter />
      </div>

      <footer>
        <AppFooter />
      </footer>

    </div>
  );
};

export default App;
