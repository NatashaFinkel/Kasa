import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import errorImg from "../assets/error-404-img.png";
import ErrorStatus from "../components/ErrorStatus";

function Error() {
  return (
    <div className="error-main-div">
      <div>
        <Image src={errorImg} className="error-img" alt="Erreur 404" />
      </div>
      <div>
        <ErrorStatus />
      </div>

      <div className="get-back-to-home-page">
        <Link to="/">Retourner sur la page d’accueil</Link>;
      </div>
    </div>
  );
}

export default Error;
