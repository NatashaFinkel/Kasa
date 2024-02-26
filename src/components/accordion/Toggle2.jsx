import { useState } from "react";
import unfoldingArrowIMG from "../../assets/unfoldingArrow.png";
import foldingArrowImg from "../../assets/foldingArrow.png";

function Toggle2() {
  const [currentArrow, setCurrentArrow] = useState(unfoldingArrowIMG);

  function ChangeArrowImage(event) {
    const clickedElement = event.target;
    let fiabiliteHiddenContent = document.getElementById("fiabilite");
    let respectHiddenContent = document.getElementById("respect");
    let serviceHiddenContent = document.getElementById("service");
    let securiteHiddenContent = document.getElementById("securite");

    const allArrows = document.querySelectorAll(".arrow");

    function addIndexToArrows() {
      allArrows.forEach(function (element, index) {
        element.setAttribute("id", index + 1);
      });
    }

    addIndexToArrows();

    function FFF() {
      let arrow1 = clickedElement.id === "1";
      let arrow2 = clickedElement.id === "2";
      let arrow3 = clickedElement.id === "3";
      let arrow4 = clickedElement.id === "4";

      if (currentArrow === unfoldingArrowIMG && arrow1) {
        setCurrentArrow(foldingArrowImg);
        fiabiliteHiddenContent.style.display = "flex";
      } else if (currentArrow === foldingArrowImg && arrow1) {
        setCurrentArrow(unfoldingArrowIMG);
        fiabiliteHiddenContent.style.display = "none";
      } else if (currentArrow === unfoldingArrowIMG && arrow2) {
        setCurrentArrow(foldingArrowImg);
        respectHiddenContent.style.display = "flex";
      } else if (currentArrow === foldingArrowImg && arrow2) {
        setCurrentArrow(unfoldingArrowIMG);
        respectHiddenContent.style.display = "none";
      } else if (currentArrow === unfoldingArrowIMG && arrow3) {
        setCurrentArrow(foldingArrowImg);
        serviceHiddenContent.style.display = "flex";
      } else if (currentArrow === foldingArrowImg && arrow3) {
        setCurrentArrow(unfoldingArrowIMG);
        serviceHiddenContent.style.display = "none";
      } else if (currentArrow === unfoldingArrowIMG && arrow4) {
        setCurrentArrow(foldingArrowImg);
        securiteHiddenContent.style.display = "flex";
      } else if (currentArrow === foldingArrowImg && arrow4) {
        setCurrentArrow(unfoldingArrowIMG);
        securiteHiddenContent.style.display = "none";
      }
    }

    FFF();

    return currentArrow;
  }

  return (
    <div>
      <div>
        <button
          type="button"
          className="accordion-btn-arrow"
          onClick={ChangeArrowImage}
        >
          <img
            src={currentArrow}
            className="arrow"
            alt={"Flèche pour déplier ou replier le contenu texte associé"}
          />
        </button>
      </div>
    </div>
  );
}

export default Toggle2;
