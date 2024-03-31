import React from "react";
import "../styles/_banner.scss";

function Banner(props) {
  return (
    <img src={props.image} className="banner" alt="Bannière" />
  );
}

export default Banner;