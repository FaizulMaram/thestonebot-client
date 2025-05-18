import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h2 className="footer-title">ABOUT US</h2>
          <p className="footer-text">
            Stonebot Game Art Studios is based in sunny El Salvador, allowing us
            to work during the best time zones for North America and Europe. Our
            flexible art production pipeline will meet the needs of your game
            art project requirements. Our team of lead artists has over 10 years
            of experience in video game and animation production. We strive to
            provide top notch services at unbeatable prices for the quality of
            work delivered to our clients.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h2 className="footer-title">OUR SERVICES</h2>
          <ul className="footer-list">
            <li>Game Art Development</li>
            <li>Character Design</li>
            <li>Background Design</li>
            <li>2D Cutscenes Production</li>
            <li>2D Animation</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 The Stonebot Studio. Video Game Art and Animation Services.
      </div>
    </footer>
  );
};

export default Footer;
