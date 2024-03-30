import React from "react";
import { useState } from "react";
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
        <img src={pictures[current]} alt="Le logement" />
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
      <img
        src={pictures[current]}
        alt="Le logement"
        className="slideShow-img"
      />
      <img
        src={rightArrow}
        className="right-arrow"
        onClick={nextPicture}
        alt="flèche"
      ></img>

      <img
        src={leftArrow}
        className="left-arrow"
        onClick={previousPicture}
        alt="flèche"
      ></img>
      <div className="picture-counter">
        {current + 1}/{allPictures}
      </div>
    </div>
  );
};
export default Slideshow;
