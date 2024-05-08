import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../houses.json";
import Image from "./Image";
import Rating from "./Rating";
import Tags from "./Tags";
import "../styles/_hostAndHousePresentation.scss";

function HostAndHousePresentation() {

  /* useParams() récupère la 
valeur de l'id qui est 
spécifié dans l'URL actuel.  */
  const { id } = useParams();

  /* On cherche dans le fichier .json 
un élément dont l'id est strictement 
identique à la valeur qu'on vient de 
récupérer avec useParams().  */
  const additionalDetails = jsonData.find((e) => e.id === id);

  return (
    <div className="two-side-by-side-containers">
      <div className="house-presentation-container">
        <h1 className="title">{additionalDetails.title}</h1>
        <p className="location">{additionalDetails.location}</p>

        <Tags tags={additionalDetails.tags} />
      </div>

      <div className="host-presentation-container">
        <div className="two-side-by-side-containers second-container">
          <div className="host-name" alt="identité du propriétaire">
            
            {/* Ici, on accède à la sous-propriété "name" 
            de la propriété "host" de chaque objet du fichier .json  */}
            <p> {additionalDetails.host.name}</p>
          </div>
          <Image
            src={additionalDetails.host.picture}
            className="host-picture"
            alt="Le propriétaire du logement"
          />
        </div>
        <Rating rating={additionalDetails.rating} />
      </div>
    </div>
  );
}

export default HostAndHousePresentation;
