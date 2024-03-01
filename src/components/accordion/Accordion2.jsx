import "./_accordion.scss";
import AboutPageArrowAndCollapsedContent from "./AboutPageArrowAndCollapsedContent";

function Accordion2(props) {

  return (
   <div>
      <div className="accordion">
        <p>{props.text}</p>
        <AboutPageArrowAndCollapsedContent />
      </div>

      <div className="collaps-content-container" id={props.id}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Accordion2;
