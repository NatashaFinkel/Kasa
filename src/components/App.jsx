import React from "react";
import AppRouter from "./AppRouter";
import Image from "./Image.jsx";
import FooterImg from "../assets/footer.png";
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
        <Image src={FooterImg} className="footer-display" alt="Footer" />
      </footer>
    </div>
  );
};

export default App;
