import React from "react";
import "../styles/_banner.scss";

//  Props personnalise le rendu du
//  composant en fonction des données
//  fournies au moment où on va l’utiliser.

function Banner(props) {
  return <img src={props.image} className="banner" alt="Bannière" />;
}

export default Banner;
