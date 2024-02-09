import React from "react";
import HomeBanner from "../components/home/HomeBanner";

import GalleryContainer from "../components/gallery/GalleryContainer";
import Card from "../components/gallery/Card";

function Home() {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <div>
        <GalleryContainer />
        <Card />
      </div>
    </div>
  );
}

export default Home;
