import React from "react";
import HomeBanner from "../components/homeBanner/HomeBanner";
import Card from "../components/cards/Card";

function Home() {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
