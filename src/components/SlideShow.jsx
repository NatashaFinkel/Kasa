import React from "react";
import { useState } from "react";
import Image from "./Image";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/_slideShow.scss";

const Slideshow = ({ pictures }) => {
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
