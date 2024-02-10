import React from "react";
import Houses from "../../houses.json";
import "./_card.scss";

function Card() {
  return (
    <div className="card-container">
      {Houses.map((house) => (
        <div className="card" key={house.id}>
          <img
            src={house.cover}
            className="house-cover"
            alt="Appartement"
          ></img>
          <div>
            <p className="card-text">{house.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
