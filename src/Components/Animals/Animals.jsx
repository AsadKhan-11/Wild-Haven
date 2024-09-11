import React from "react";
import forest from "./images/forest.png";
import lion from "./images/lion.png";
import tiger from "./images/tiger.png";
import gorilla from "./images/gorilla.png";
import bear from "./images/bear.png";

import "./Animals.css";
function Animals() {
  return (
    <div className="animals">
      <div className="animals-container">
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
          <button className="animals-btn left-btn">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <button className="animals-btn right-btn">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>

      <img src={tiger} />
    </div>
  );
}

export default Animals;
