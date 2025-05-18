import React from "react";

import Logo from "../../assets/img/stone-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav ">
        <div className="container">
          <div className="nav__container">
            <div className="nav__logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="nav__links">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>

                <li className="has-child">
                  <a href="#services">
                    Our Services <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  <ul className="child">
                    <li>
                      <a href="#services">Game Art Development</a>
                    </li>
                    <li>
                      <a href="#services">Character Desing</a>
                    </li>
                    <li>
                      <a href="#services">Background Design</a>
                    </li>
                    <li>
                      <a href="#services">2d Cutscenes Production</a>
                    </li>
                    <li>
                      <a href="#services">2d Animation</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#portfolio">Our Games</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
