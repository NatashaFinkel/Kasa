import React from "react";
import Houses from "../../houses.json";

function Card() {
  return (
    <div className="gallery-container">
      {Houses.map((house) => (
        <div className="card" key={house.id}>
          <img
            src={house.cover}
            className="house-cover"
            alt="Appartement"
          ></img>
          <div>
            <p className="gallery-text">{house.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
