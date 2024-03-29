import React from "react";

import HomeBanner from "../components/HomeBanner.jsx";
import Card from "../components/Card.jsx";

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
