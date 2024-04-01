import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../houses.json";
import ErrorPage from "./ErrorPage";
import Slideshow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import HostAndHousePresentation from "../components/HostAndHousePrentation";

const HousePreview = () => {
  const { id } = useParams();
  const additionalDetails = jsonData.find((e) => e.id === id);

  if (!additionalDetails) {
    return <ErrorPage />;
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
          text={"hidden-content-list"}
          hiddenContent={additionalDetails.equipments}
        />
      </div>
    </section>
  );
};

export default HousePreview;
