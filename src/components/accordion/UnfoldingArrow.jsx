import "./_accordion.scss";

import React from "react";
import unfoldingArrowIMG from "../../assets/unfoldingArrow.png";
import Essai4 from "./Essai4";

function UnfoldingArrow() {
  return (
    <div>
      <button type="button" className="accordion-btn-arrow">
        <img
          src={unfoldingArrowIMG}
          className="accordion-arrow"
          onClick={Essai4}
          alt="Flèche pour déplier le contenu texte associé"
        ></img>
      </button>
    </div>
  );
}

export default UnfoldingArrow;
