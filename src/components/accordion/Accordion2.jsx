import "./_accordion.scss";
import Toggle2 from "./Toggle2";

function Accordion2(props) {

  return (
   <div>
      <div className="accordion">
        <p>{props.text}</p>
        <Toggle2 />
      </div>

      <div className="collaps-content-container" id={props.id}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Accordion2;
