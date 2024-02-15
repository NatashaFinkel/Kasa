import React from "react";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import Accordion from "../components/accordion/Accordion";
import "../components/accordion/_accordion.scss";

function About() {
  return (
    <div>
      <div>
        <AboutBanner />
      </div>

      <div className="about-page-main-content">
        <Accordion />
      </div>
    </div>
  );
}

export default About;
