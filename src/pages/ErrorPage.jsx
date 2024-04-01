import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import errorImg from "../assets/error-404-img.png";
import "../styles/_error.scss";

function ErrorPage() {
  return (
    <div className="error-main-div">
      <div>
        <Image src={errorImg} className="error-img" alt="Erreur 404" />
      </div>

      <div className="error-status-div">
        <p className="error-status">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>

      <div className="get-back-to-home-page">
        <Link to="/">Retourner sur la page d’accueil</Link>;
      </div>
    </div>
  );
}

export default ErrorPage;
