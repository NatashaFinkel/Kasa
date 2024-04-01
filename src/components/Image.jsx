import React from "react";

function Image({ src, id, className, onClick, alt }) {
  return (
    <img src={src} id={id} className={className} onClick={onClick} alt={alt} />
  );
}

export default Image;
