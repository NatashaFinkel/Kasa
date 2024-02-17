import "./_accordion.scss";

import React from "react";

import foldingArrowIMG from "../../assets/foldingArrow.png";
import Essai5 from "./Essai5";

function UnfoldingArrow() {
  return (
    <div>
      <button type="button" className="accordion-btn-arrow">
        <img
          src={foldingArrowIMG}
          className="accordion-arrow"
            onClick={Essai5}
          alt="Flèche pour replier le contenu texte associé"
        ></img>
      </button>
    </div>
  );
}

export default UnfoldingArrow;
