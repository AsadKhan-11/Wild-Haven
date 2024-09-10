import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <h1 className="nav-header">Wild Haven</h1>
      <div className="links">
        <a href="" className="footer-link">
          About us
        </a>
        <a href="" className="footer-link">
          Events
        </a>
        <a href="" className="footer-link">
          Animals
        </a>
      </div>

      <div className="footer-icons">
        <a href="" className="icon-links">
          {" "}
          <ion-icon name="logo-instagram" className="icons"></ion-icon>{" "}
        </a>
        <a href="" className="icon-links">
          {" "}
          <ion-icon name="logo-facebook" className="icons"></ion-icon>{" "}
        </a>
        <a href="" className="icon-links">
          {" "}
          <ion-icon name="logo-youtube" className="icons"></ion-icon>{" "}
        </a>
        <a href="" className="icon-links">
          {" "}
          <ion-icon name="logo-snapchat" className="icons"></ion-icon>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
