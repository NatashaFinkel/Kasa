import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../houses.json";
import Error from "./Error";
import Slideshow from "../components/slideShow/SlideShow";
import Collapse from "../components/collapse/Collapse";
import HostAndHousePresentation from "../components/hostAndHousePresentation/HostAndHousePrentation";

const House = () => {
  const { id } = useParams();
  const additionalDetails = jsonData.find((e) => e.id === id);

  if (!additionalDetails) {
    return <Error />;
  }
  
  return (
    <section>
      <div>
        <Slideshow pictures={additionalDetails.pictures} />
      </div>

      <HostAndHousePresentation />

      <div className="two-side-by-side-containers details-container">
        <Collapse
          title={"Description"}
          hiddenContent={additionalDetails.description}
        />
        <Collapse
          title={"Équipements"}
          hiddenContent={additionalDetails.equipments}
        />
      </div>
    </section>
  );
};

export default House;
