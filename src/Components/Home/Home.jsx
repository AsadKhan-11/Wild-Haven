import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Home.css";
function Home() {
  useGSAP(() => {
    gsap.to("#cta", { y: -"50px", delay: 1, opacity: 1 });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-header">Your Adventure Begins Here!</h1>
        <p id="txt" className="home-txt">
          Discover the magic of untouched nature, where every path leads to
          serenity. Explore the hidden gems of the wilderness, embracing the
          beauty of the great outdoors. Reconnect with the peaceful rhythm of
          nature and let it inspire your soul.
        </p>
      </div>
      <div id="cta">
        <button className="home-btn">Reserve a Spot</button>
        <p className="home-price">Starts at $299/night</p>
      </div>
      <div className="blur-bottom"></div>
    </div>
  );
}

export default Home;
