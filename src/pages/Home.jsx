import React from "react";
import HomeBanner from "../components/home/HomeBanner";

import Card from "../components/home/Card";

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
