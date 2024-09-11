import React from "react";
import "./Camp.css";
function Camp() {
  return (
    <div className="camp" id="Camp">
      <p className="camp-txt">
        With each visit, you contribute to the growing efforts to protect and
        restore our natural habitats. Your support helps preserve the beauty and
        diversity of wildlife for generations to come.
      </p>

      <div className="camp-info">
        <div className="camp-info-container">
          <h1 className="camp-number">650</h1>
          <p className="camp-name">Daily Guided Visits</p>
        </div>
        <div className="camp-info-container">
          <h1 className="camp-number">95%</h1>
          <p className="camp-name"> Visitors Satisfied</p>
        </div>
        <div className="camp-info-container">
          <h1 className="camp-number">50+</h1>
          <p className="camp-name">Biodiversity Species</p>
        </div>
        <div className="camp-info-container">
          <h1 className="camp-number">200k+</h1>
          <p className="camp-name">Community Followers</p>
        </div>
      </div>
    </div>
  );
}

export default Camp;
