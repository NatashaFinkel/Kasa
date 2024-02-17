import React, { useState } from "react";
import unfoldingArrowIMG from "../../assets/unfoldingArrow.png";
import foldingArrowImg from "../../assets/foldingArrow.png";

function ToggleArrow() {
  const [currentArrow, setCurrentArrow] = useState(unfoldingArrowIMG);

  const toggleArrow = () => {
    setCurrentArrow(
      currentArrow === unfoldingArrowIMG ? foldingArrowImg : unfoldingArrowIMG
    );
  };

  return (
    <div>
      <button type="button" className="accordion-btn-arrow">
        {currentArrow === unfoldingArrowIMG ? (
          <img
            src={unfoldingArrowIMG}
            alt="Flèche pour déplier le contenu texte associé"
            onClick={toggleArrow}
          />
        ) : (
          <img
            src={foldingArrowImg}
            alt="Flèche pour replier le contenu texte associé"
            onClick={toggleArrow}
          />
        )}
      </button>
    </div>
  );
}

export default ToggleArrow;
