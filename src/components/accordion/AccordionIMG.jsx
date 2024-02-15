import arrowImg from "../../assets/unfoldingArrow.png";
import "./_accordion.scss";

function ArrowImage() {
  return (
    <img
      src={arrowImg}
      className="arrow"
      alt="Flèche pour déplier le contenu texte associé"
    ></img>
  );
}

export default ArrowImage;
