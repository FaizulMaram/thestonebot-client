import React from "react";
import "./Hero.css"; // Import the CSS file for styling
import Video from "../../assets/video/stone-video.mp4"; // Import the video file

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="background-video">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-content">
          <div className="hero-card-main">
            <div className="hero-card">
              <div className="hero-card-content">
                <h1>Our Game Art & Animation Services</h1>
                <p>
                  Our team will support your creative vision coming up with
                  mind-blowing ideas for your game or animation project.
                </p>
                <a href="">Learn More</a>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-content">
                <h1>
                  Our Full-Fledged <br /> Games
                </h1>
                <p>
                  Take a sneak peek at our track record as passionate
                  independent game artists and developers!
                </p>
                <a href="">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
