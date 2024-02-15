import "./_accordion.scss";
import ArrowImage from "./AccordionIMG";

function Accordion() {
  return (
    <div className="accordion-container">
      <div className="accordion">
        <p>Fiabilité</p>
        <ArrowImage />
      </div>

      <div className="accordion">
        <p>Respect</p>
        <ArrowImage />
      </div>

      <div className="accordion">
        <p>Service</p>
        <ArrowImage />
      </div>

      <div className="accordion">
        <p>Sécurité</p>
        <ArrowImage />
      </div>
    </div>
  );
}

export default Accordion;
