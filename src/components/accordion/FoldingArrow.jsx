import foldingArrowIMG from "../../assets/foldingArrow.png";
import "./_accordion.scss";

function FoldingArrow() {
  return (
    <img
      src={foldingArrowIMG}
      className="accordion-arrow"
      alt="Flèche pour replier le contenu texte associé"
    ></img>
  );
}

export default FoldingArrow;
