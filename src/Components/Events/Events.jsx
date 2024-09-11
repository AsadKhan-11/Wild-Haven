import React from "react";
import "./Events.css";
import data from "./Data";
import leaf from "./Images/leaf.png";
import leaf2 from "./Images/leaf2.png";
import rowing from "./Images/rowing.svg";

function Events() {
  return (
    <div className="events" id="Events">
      <div className="rowing-container">
        <img src={rowing} className="rowing" />
        <h3 className="rowing-txt">Top Things to do in Park</h3>
      </div>
      <img src={leaf} className="leaf leaf1" />
      <img src={leaf2} className="leaf leaf2 " />
      <div className="events-container">
        {data.map((datas, index) => {
          return (
            <div className="event-info-container" key={index}>
              <img src={datas.img} className="event-img" />

              <div className="event-info">
                <h2 className="event-header">{datas.header}</h2>

                <div className="header-container">
                  <p className="event-text">{datas.text}</p>
                  <div className="views-container">
                    <p className="event-views">{datas.views} views</p>
                    <p className="event-likes">{datas.likes} likes</p>
                  </div>
                </div>
                <div className="btn-prices">
                  <button className="event-btn">See Details</button>
                  <p className="event-price">
                    Starts at <strong>{datas.price}</strong>/{datas.per}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
