import { useParams } from "react-router-dom";
import jsonData from "../../houses.json";
import Rating from "./Rating";

import "./_hostAndHousePresentation.scss";

function HostAndHousePresentation() {
  const { id } = useParams();
  const additionalDetails = jsonData.find((e) => e.id === id);

  return (
    <div className="two-side-by-side-containers">
      <div className="house-presentation-container">
        <h1 className="title">{additionalDetails.title}</h1>
        <p className="location">{additionalDetails.location}</p>
        <p>Manque les tags ici !!</p>
      </div>

      <div className="host-presentation-container">
        <div className="two-side-by-side-containers">
          <img
            className="host-picture"
            alt="Le propriétaire du logement"
            src={additionalDetails.host.picture}
          />

          <div className="host-name" alt="identité du propriétaire">
            {additionalDetails.host.name}
          </div>
        </div>

        <div className="rating-div">
          <Rating rating={additionalDetails.rating} />
        </div>
      </div>
    </div>
  );
}

export default HostAndHousePresentation;
