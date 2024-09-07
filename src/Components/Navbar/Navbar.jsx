import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-header">Wild Haven</h1>
      <div className="links">
        <a href="" className="nav-link">
          About us
        </a>
        <a href="" className="nav-link">
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
