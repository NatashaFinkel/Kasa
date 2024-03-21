import React from "react";
import { useState } from "react";
import "./_slideShow.scss";

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const allPictures = pictures.length;

  if (allPictures === 0) {
    return "";
  } else if (allPictures === 1) {
    return (
      <div>
        <img src={pictures[current]} alt="Le logement" />
      </div>
    );
  }

  return(
    <div>
         <img src={pictures[current]} alt="Le logement" className="slideShow-img"/>
    </div>
  )
};
export default Slideshow;
