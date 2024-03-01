import { useState } from "react";
import unfoldingArrowIMG from "../../assets/unfoldingArrow.png";
import foldingArrowImg from "../../assets/foldingArrow.png";

function Toggle2() {
  const [currentArrow, setCurrentArrow] = useState(unfoldingArrowIMG);

  function ChangeArrowImage(event) {
    const clickedElement = event.target;
    const allArrows = document.querySelectorAll(".arrow");

    const fiabiliteHiddenContent = document.getElementById("fiabilite");
    const respectHiddenContent = document.getElementById("respect");
    const serviceHiddenContent = document.getElementById("service");
    const securiteHiddenContent = document.getElementById("securite");

    function addIndexToArrows() {
      allArrows.forEach(function (element, index) {
        element.setAttribute("id", index + 1);
      });
    }

    function showHiddenContent(hiddenContent) {
      hiddenContent.style.display = "flex";
    }

    function hideHiddenContent(hiddenContent) {
      hiddenContent.style.display = "none";
    }

    addIndexToArrows();

    let arrow1 = clickedElement.id === "1";
    let arrow2 = clickedElement.id === "2";
    let arrow3 = clickedElement.id === "3";
    let arrow4 = clickedElement.id === "4";

    switch (currentArrow) {
      case foldingArrowImg: {
        setCurrentArrow(unfoldingArrowIMG);

        if (arrow1) {
          hideHiddenContent(fiabiliteHiddenContent);
        }
        if (arrow2) {
          hideHiddenContent(respectHiddenContent);
        }

        if (arrow3) {
          hideHiddenContent(serviceHiddenContent);
        }

        if (arrow4) {
          hideHiddenContent(securiteHiddenContent);
        }
        break;
      }
      case unfoldingArrowIMG: {
        setCurrentArrow(foldingArrowImg);

        if (arrow1) {
          showHiddenContent(fiabiliteHiddenContent);
        }
        if (arrow2) {
          showHiddenContent(respectHiddenContent);
        }
        if (arrow3) {
          showHiddenContent(serviceHiddenContent);
        }
        if (arrow4) {
          showHiddenContent(securiteHiddenContent);
        }
        break;
      }
      default: {
        console.error("ERREUR");
        break;
      }
    }
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