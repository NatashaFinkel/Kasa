import React from "react";
import { useState } from "react";
import Image from "./Image";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/_slideShow.scss";

const Slideshow = ({ pictures }) => {

//  useState() sert à déclarer 
//  la variable (ici, current) dont la
//  valeur initiale (ici, zéro) peut être 
//  mise à jour (ici, grâce à setCurrent() ).

  const [current, setCurrent] = useState(0);
  const allPictures = pictures.length;

  if (allPictures === 0) {
    return "";
  } else if (allPictures === 1) {
    return (
      <div>
        <Image
          src={pictures[current]}
          className="slideShow-img"
          alt="Le logement"
        />

        <div className="picture-counter">
          {current + 1}/{allPictures}
        </div>
      </div>
    );
  }

  //  Le symbole "?" vérifie une condition
  //  et retourne une valeur en fonction de cette condition.

  //  Le symbole ":" sert à séparer les différentes valeurs à 
  //  retourner selon si la condition est vraie ou fausse.

  const previousPicture = () => {
    setCurrent(current === 0 ? allPictures - 1 : current - 1);
  };

  const nextPicture = () => {
    setCurrent(current === allPictures - 1 ? 0 : current + 1);
  };

  return (
    <div className="slideShow">
      <Image
        src={pictures[current]}
        className="slideShow-img"
        alt="Le logement"
      />

      <Image
        src={rightArrow}
        className="right-arrow"
        onClick={nextPicture}
        alt="flèche vers la droite"
      />

      <Image
        src={leftArrow}
        className="left-arrow"
        onClick={previousPicture}
        alt="flèche vers la gauche"
      />

      <div className="picture-counter">
        {current + 1}/{allPictures}
      </div>
    </div>
  );
};

export default Slideshow;
