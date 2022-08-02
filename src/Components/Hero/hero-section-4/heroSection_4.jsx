import React from "react";
import "./hero-section-4.css";
import Video from "../Videos/waves.mp4";
const hero_4 = () => (
  <div class='video-container'>
    <div class='wave-video'>
      <video autoPlay loop>
        <source src={Video} />
      </video>
    </div>
    <div class='motto'>
      <div class='learn'>Learn</div>
      <div class='think'>Think</div>
      <div class='innovate'>Innovate</div>
    </div>
  </div>
);
export default hero_4;
