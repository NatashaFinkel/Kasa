import "./_accordion.scss";
import UnfoldingArrow from "./UnfoldingArrow";

function Accordion() {
  return (
    <div className="accordion-container">
      <div className="accordion">
        <p>Fiabilité</p>
        <UnfoldingArrow />
      </div>

      <div className="folded-content">
        <p className="text">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>

      <div className="accordion">
        <p>Respect</p>
        <UnfoldingArrow />
      </div>

      <div className="folded-content">
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>

      <div className="accordion">
        <p>Service</p>
        <UnfoldingArrow />
      </div>

      <div className="folded-content">
        <p className="text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>

      <div className="accordion">
        <p>Sécurité</p>
        <UnfoldingArrow />
      </div>

      <div className="folded-content">
        <p className="text">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </div>
  );
}

export default Accordion;
