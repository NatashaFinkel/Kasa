import React from "react";
import Image from "../components/Image.jsx";
import aboutBannerImg from "../assets/about-banner.png";
import Collapse from "../components/Collapse.jsx";
import "../styles/_banner.scss";
import "../styles/_collapse.scss";

function AboutPage() {
  return (
    <div>
      <div>
        <Image
          src={aboutBannerImg}
          className="banner"
          alt="Bannière de la page About"
        />
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

export default AboutPage;
