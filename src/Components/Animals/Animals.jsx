import React, { useState } from "react";
import forest from "./images/forest.png";
import Names from "./Names.js";

import "./Animals.css";
function Animals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState("");
  const nextImage = () => {
    setDirection("next");

    setCurrentIndex((currentIndex) => currentIndex + 1) % Names.length;
  };
  const prevImage = () => {
    setDirection("prev");

    setCurrentIndex((currentIndex) => currentIndex - 1) % Names.length;
  };

  return (
    <div className="animals" id="Animals">
      <div className="animals-wrapper">
        <div className="animals-container">
          <div className="animals-info">
            {Names.map((name, index) => (
              <div
                className={`animals-icon ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={name.icon}
                  alt={`animal-${index}`}
                  className="animals-icon-img"
                />
              </div>
            ))}
            <h2 className="animals-header">Discover Captivating Wildlife</h2>
            {Names.map((name, index) => (
              <p
                className={`animals-txt ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
              >
                {name.txt}
              </p>
            ))}
            <div className="btn-container">
              <button
                className={`animals-btn left-btn${
                  currentIndex === 0 ? " disabled" : ""
                }`}
                disabled={currentIndex === 0 || Names.length === 0}
                onClick={prevImage}
              >
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
              <button
                className={`animals-btn right-btn${
                  currentIndex == Names.length - 1 ? " disabled" : ""
                }`}
                disabled={currentIndex === Names.length - 1}
                onClick={nextImage}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div className="slider">
            {Names.map((name, index) => {
              return (
                <div
                  className={`animals-img-container ${
                    index === currentIndex ? "active" : ""
                  } ${direction}`}
                  key={index}
                >
                  <img src={name.img} className="animals-img" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animals;
