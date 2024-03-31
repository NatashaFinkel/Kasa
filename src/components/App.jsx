import React from "react";
import AppRouter from "./AppRouter";
import AppFooter from "./Footer.jsx";
import "../styles/_app.scss";

//  Ce fichier contient la mise
//  en page globale de l'application
//  (les composants qui sont communs 
//  à toutes les pages).

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
