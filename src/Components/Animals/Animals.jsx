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
    <div className="animals">
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
          <p className="animals-txt">
            Step into the heart of the savannah and come face-to-face with the
            king of the jungle! Our pride of lions roam with a regal confidence,
            their golden manes glistening in the sun. Witness the power and
            grace of these magnificent creatures as they patrol their territory,
            protect their family, and showcase their primal instincts. As the
            lion's mighty roar echoes across the park, you'll feel the true
            essence of nature's most revered predator. A visit to our wildlife
            park offers an unforgettable encounter with the wild, where you can
            experience the raw beauty and untamed spirit of the animal kingdom.
          </p>
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
  );
}

export default Animals;
