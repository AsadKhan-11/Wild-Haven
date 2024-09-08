import React from "react";
import "./Events.css";
import data from "./Data";
import leaf from "./Images/leaf.jpg";

function Events() {
  return (
    <div className="events">
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
