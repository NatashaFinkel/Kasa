import React from "react";
import Houses from "../../houses.json";
import "./_thumbnail.scss";

function Thumbnail() {
  return (
   <div className="thumbnail-container"> 

      {Houses.map((house) => (
        <div className="thumbnail" key={house.id}>
          <img
            src={house.cover}
            className="house-cover"
            alt="Appartement"
          ></img>
          <div>
            <p className="thumbnail-text">{house.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thumbnail;
