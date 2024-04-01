import React from "react";
import Image from "../components/Image.jsx";
import homeBannerImg from "../assets/home-banner.png";
import Card from "../components/Card.jsx";

function HomePage() {
  return (
    <div>
      <div>
        <Image
          src={homeBannerImg}
          className="banner"
          alt="Bannière de la page d'accueil"
        />
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
