import React from "react";

import AboutBanner from "../components/aboutBanner/AboutBanner";

import Accordion2 from "../components/accordion/Accordion2.jsx";
import "../components/accordion/_accordion.scss";

function About() {
  return (
    <div>
      <div>
        <AboutBanner />
      </div>

      <div className="about-page-main-content">
        <div className="accordion-container">
          <Accordion2
            text="Fiabilité"
            id="fiabilite"
            content={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
          />
          <Accordion2
            text="Respect"
            id="respect"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Accordion2
            text="Service"
            id="service"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Accordion2
            text="Sécurité"
            id="securite"
            content={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
