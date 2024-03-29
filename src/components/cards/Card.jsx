import React from "react";
import { Link } from "react-router-dom";
import Houses from "../../houses.json";
import "../../styles/_card.scss";

function Card() {
  return (
    <div className="card-container">
      {Houses.map((house) => (
        <Link key={house.id} to={`houses/${house.id}`}>
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
        </Link>
      ))}
    </div>
  );
}

export default Card;
