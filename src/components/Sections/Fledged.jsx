import React from "react";
import "./Fledged.css";
import FledgedPic from "../../assets/img/fledegedgames/Fledged-Pic.png";
import PlatformsLogos1 from "../../assets/img/fledegedgames/platfroms-logos-1.png";
import PlatformsLogos2 from "../../assets/img/fledegedgames/platfroms-logos-2.png";

const Fledged = () => {
  return (
    <>
      <h2 className="fledged-title">Our Full-Fledged Games</h2>
      <div className="fledged-container">
        <div className="fledged-section">
          <div className="fledged-content fledged-section-one">
            <div className="fledged-text">
              <h3 className="fledged-section-title">The Last Friend</h3>
              <p className="fledged-section-text">
                Beat hordes of relentless enemies using brutal punches, powerful
                kicks or well-timed grabs; deploy ruthlessly effective defenses
                and customize your fighting style.
              </p>
              <div className="logo-title">
                <div>
                  <h4 className="logo-title-one">Available on</h4>
                  <img src={PlatformsLogos2} alt="Available Platforms" />
                </div>
                <div>
                  <h4 className="logo-title-two">Coming To</h4>
                  <img src={PlatformsLogos1} alt="Coming Soon Platforms" />
                </div>
              </div>
              <button className="fledged-read-story-btn">
                Read the Full Story Here
              </button>
            </div>
            <div className="fledged-picture">
              <img src={FledgedPic} alt="The Last Friend" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fledged;
