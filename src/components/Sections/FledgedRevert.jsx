import React from "react";
import "./Fledged.css";
import FledgedPic from "../../assets/img/fledegedgames/Fledged-Pic2.png";
import PlatformsLogos2 from "../../assets/img/fledegedgames/platfroms-logos-21.png";

const Fledged = () => {
  return (
    <>
      <div className="fledged-container">
        <div className="fledged-section">
          <div className="fledged-content">
            <div className="fledged-picture">
              <img src={FledgedPic} alt="The Last Friend" />
            </div>
            <div className="fledged-text-2">
              <h3 className="fledged-section-title">Stereo Aereo</h3>
              <p className="fledged-section-text">
                Stereo Aereo is a crazy musical journey through space. Get into
                the groove and use your sense of rhythm.
              </p>
              <div className="logo-title">
                <div>
                  <h4 className="logo-title-one">Available on</h4>
                  <img src={PlatformsLogos2} alt="Available Platforms" />
                </div>
              </div>
              <button className="fledged-read-story-btn">Get it here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fledged;
