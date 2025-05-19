import React, { useState } from "react";
import Logo from "../../assets/img/stone-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={Logo} alt="Logo" />
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>

          <div className={`nav__links ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li
                className={`has-child ${isServicesOpen ? "open" : ""}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <a href="#services">
                  Our Services <i className="fa-solid fa-chevron-down"></i>
                </a>
                <ul className="child">
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      Game Art Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      Character Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      Background Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      2D Cutscenes Production
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      2D Animation
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                  Our Games
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
