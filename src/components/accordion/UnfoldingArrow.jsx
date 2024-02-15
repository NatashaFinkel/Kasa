import unfoldingArrowIMG from "../../assets/unfoldingArrow.png";
import "./_accordion.scss";

function UnfoldingArrow() {
  return (
    <img
      src={unfoldingArrowIMG}
      className="arrow"
      alt="Flèche pour déplier le contenu texte associé"
    ></img>
  );
}

export default UnfoldingArrow;
