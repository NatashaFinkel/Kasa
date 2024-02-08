import React from "react";
import HomeBanner from "../components/home/HomeBanner";

import GalleryContainer from "../components/gallery/GalleryContainer";

function Home() {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>

      <div className="gallery-container">
        <GalleryContainer />
      </div>
    </div>
  );
}

export default Home;
