import "./_accordion.scss";
import UnfoldingArrow from "./UnfoldingArrow";

function Accordion() {
  return (
    <div className="accordion-container">
      <div className="accordion">
        <p>Fiabilité</p>
        <UnfoldingArrow />
      </div>

      <div className="accordion">
        <p>Respect</p>
        <UnfoldingArrow />
      </div>

      <div className="accordion">
        <p>Service</p>
        <UnfoldingArrow />
      </div>

      <div className="accordion">
        <p>Sécurité</p>
        <UnfoldingArrow />
      </div>
    </div>
  );
}

export default Accordion;
