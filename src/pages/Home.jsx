import React from "react";
import HomeBanner from "../components/home/HomeBanner";

import Thumbnail from "../components/home/Thumbnail";

function Home() {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <div>
        <Thumbnail />
      </div>
    </div>
  );
}

export default Home;
