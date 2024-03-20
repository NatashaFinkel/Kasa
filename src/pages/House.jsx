import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../houses.json";
import Error from "./Error";
import Collapse from "../components/collapse/Collapse";

const House = () => {
  const { id } = useParams();
  const additionalDetails = jsonData.find((e) => e.id === id);

  if (!additionalDetails) {
    return <Error />;
  }
  return (
    <section>
      <div>
      <p>Manque le component slideShow</p>
        <p>Manque le component Host</p>
        <p>Manque le component Tag</p>
        <p>Manque le component Rating</p>
      </div>

      <Collapse
        title={"Description"}
        hiddenContent={additionalDetails.description}
      />
      <Collapse
        title={"Équipements"}
        hiddenContent={additionalDetails.equipments}
      />
    </section>
  );
};

export default House;
