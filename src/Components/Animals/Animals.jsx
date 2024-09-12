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
          <h2 className="animals-header">Discover Captivating Wildlife</h2>
          <p className="animals-txt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iusto quisquam molestias laborum beatae obcaecati voluptatum totam,
            corrupti optio deserunt repudiandae similique tenetur, corporis,
            exercitationem tempora tempore non dolorem? Exercitationem, cumque
            labore mollitia quam officia dicta perspiciatis assumenda, ab sunt
            ullam at necessitatibus iste quasi doloribus quo recusandae tenetur
            odit.
          </p>
          <div className="btn-container">
            <button className="animals-btn left-btn" onClick={prevImage}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <button className="animals-btn right-btn" onClick={nextImage}>
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
