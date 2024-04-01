import React from "react";
import { Link } from "react-router-dom";
import Houses from "../houses.json";
import Image from "./Image";
import "../styles/_card.scss";

//  Au clic sur la card, l'utilisateur est redirigé
//  sur la route correspondant à l'appartement choisi.
//  Celui-ci est localisé grâce à son id (car unique).

//  Les données affichées sont les propriétés
//  de chaque objet extrait du fichier json.

function Card() {
  return (
    <div className="card-container">
      {Houses.map((house) => (
        <Link key={house.id} to={`houses/${house.id}`}>
          <div className="card" key={house.id}>
            <Image
              src={house.cover}
              className="house-cover"
              alt="Appartement"
            />
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
