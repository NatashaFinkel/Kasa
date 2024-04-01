import React from "react";
import Banner from "../components/Banner.jsx";
import homeBannerImg from "../assets/home-banner.png";
import Card from "../components/Card.jsx";

function Home() {
  return (
    <div>
      <div>
        <Banner image={homeBannerImg} />
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
