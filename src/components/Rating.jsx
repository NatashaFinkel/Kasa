import React from "react";
import "../styles/_variables.scss";

//  Dans la méthode map(),
//  UNDERSCORE représente un argument 
//  que l’on CHOISIT de ne pas utiliser
//  (il correspond à l’élément actuel du tableau).
//  Cet élément est obligatoire en tant qu'argument
//  dans map(), donc on utilisera uniquement l’index.

const Rating = ({ rating }) => {

  //  Ceci crée un tableau contenant 5 zéros
  //  (en attendant de les remplacer 
  //  par les étoiles).
  const starsArray = Array(5).fill(0);

  const starColor = {
    red: "rgba(255, 96, 96, 1)",
    grey: "rgba(227, 227, 227, 1)",
  };

  return (
    <div className="star-container">
      {starsArray.map((_, index) => {
        return (
          <div key={index} className="star">
            <i
              className="fa-solid fa-star"
              style={{ color: rating > index ? starColor.red : starColor.grey }}
            ></i>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
