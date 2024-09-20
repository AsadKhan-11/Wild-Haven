import React, { useEffect, useState } from "react";

import "./Navbar.css";
function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100 && window.scrollY < 3400) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navbarBackground ? "navbar scrolled" : "navbar"}>
      <h1 className="nav-header">Wild Haven</h1>
      <div className="links">
        <a href="#Camp" className="nav-link">
          About Camp
        </a>
        <a href="#Events" className="nav-link">
          Events
        </a>
        <a href="#Animals" className="nav-link">
          Animals
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
