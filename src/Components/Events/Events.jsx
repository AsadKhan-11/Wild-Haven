import React from "react";
import "./Events.css";
import data from "./Data";

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
                <p className="event-text">{datas.text}</p>

                <div className="btn-prices">
                  <button className="event-btn">See Details</button>
                  <p className="event-price">Starts at {datas.price}</p>
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
