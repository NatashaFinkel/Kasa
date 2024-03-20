import React from "react";

import AboutBanner from "../components/aboutBanner/AboutBanner";
import Collapse from "../components/collapse/Collapse.jsx";
import "../components/collapse/_collapseAboutPage.scss";

function About() {
  return (
    <div>
      <div>
        <AboutBanner />
      </div>

      <div className="about-page-main-content">
        <div className="collapse-container">
        <Collapse
          title="Fiabilité"
          hiddenContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          additionalDetails="about-page-details"
          additionalDetailsContainer="about-page-title"
          text="about-page-text"
        />

        <Collapse
          title="Respect"
          hiddenContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          additionalDetails="about-page-details"
          additionalDetailsContainer="about-page-title"
          text="about-page-text"
        />

        <Collapse
          title="Service"
          hiddenContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          additionalDetails="about-page-details"
          additionalDetailsContainer="about-page-title"
          text="about-page-text"
        />

        <Collapse
          title="Sécurité"
          hiddenContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          additionalDetails="about-page-details"
          additionalDetailsContainer="about-page-title"
          text="about-page-text"
        />
      </div>
      </div>
    </div>
  );
}

export default About;
