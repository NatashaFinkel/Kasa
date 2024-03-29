import React from "react";
import "../styles/_banner.scss";

function Banner({ image, ...props }) {
  return (
    <img src={image} className={props.className} alt="Bannière" />
  );
}

export default Banner;
