import { useParams } from "react-router-dom";
import jsonData from "../houses.json";
import Rating from "./Rating";
import Tags from "./Tags";

import "../styles/_hostAndHousePresentation.scss";
function HostAndHousePresentation() {
  const { id } = useParams();
  const additionalDetails = jsonData.find((e) => e.id === id);

  return (
    <div className="two-side-by-side-containers">
      <div className="house-presentation-container">
        <h1 className="title">{additionalDetails.title}</h1>
        <p className="location">{additionalDetails.location}</p>

        <Tags tags={additionalDetails.tags} />
      </div>

      <div className="host-presentation-container">
        <div className="two-side-by-side-containers second-container">
          <div className="host-name" alt="identité du propriétaire">
            <p> {additionalDetails.host.name}</p>
          </div>

          <img
            className="host-picture"
            alt="Le propriétaire du logement"
            src={additionalDetails.host.picture}
          />
        </div>
        <Rating rating={additionalDetails.rating} />
      </div>
    </div>
  );
}

export default HostAndHousePresentation;
