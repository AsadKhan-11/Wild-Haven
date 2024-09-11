import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-header">Wild Haven</h1>
      <div className="links">
        <a href="#Camp" className="nav-link">
          About Camp
        </a>
        <a href="#Events" className="nav-link">
          Events
        </a>
        <a href="" className="nav-link">
          Sign in
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
