import React from "react";
import Houses from "../../houses.json";

function Card() {
  return (
    <div className="gallery-container">
      {Houses.map((house) => (
        <div className="card" key={house.id}>
          {house.title}
        </div>
      ))}
    </div>
  );
}

export default Card;
