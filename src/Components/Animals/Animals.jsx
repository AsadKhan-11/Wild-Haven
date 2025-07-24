import React, { useState } from "react";
import forest from "./images/forest.png";
import Names from "./Names.js";
import { motion, AnimatePresence } from "framer-motion";

import "./Animals.css";

function Animals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextImage = () => {
    if (currentIndex < Names.length - 1) {
      setDirection("next");
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "next" ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "next" ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <div className="animals" id="Animals">
      <div className="animals-wrapper">
        <div className="animals-container">
          <div className="animals-info">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                className="animals-icon active"
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <img
                  src={Names[currentIndex].icon}
                  alt={`animal-${currentIndex}`}
                  className="animals-icon-img"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence custom={direction} mode="wait">
              <motion.h2
                className="animals-header"
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                Discover Captivating Wildlife
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence custom={direction} mode="wait">
              <motion.p
                className="animals-txt active"
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                {Names[currentIndex].txt}
              </motion.p>
            </AnimatePresence>

            <div className="btn-container">
              <button
                className={`animals-btn left-btn${
                  currentIndex === 0 ? " disabled" : ""
                }`}
                onClick={prevImage}
                disabled={currentIndex === 0}
              >
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
              <button
                className={`animals-btn right-btn${
                  currentIndex === Names.length - 1 ? " disabled" : ""
                }`}
                onClick={nextImage}
                disabled={currentIndex === Names.length - 1}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div className="slider">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className="animals-img-container active"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <img
                  src={Names[currentIndex].img}
                  alt={`animal-${currentIndex}`}
                  className="animals-img"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animals;
