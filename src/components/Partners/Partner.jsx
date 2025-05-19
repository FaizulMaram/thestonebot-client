import React from "react";
import "./Partner.css";
import PartnerPic1 from "../../assets/img/partners/partner-1.png";
import PartnerPic2 from "../../assets/img/partners/partner-2.png";
import PartnerPic3 from "../../assets/img/partners/partner-3.png";
import PartnerPic4 from "../../assets/img/partners/partner-4.png";
import PartnerPic5 from "../../assets/img/partners/partner-5.png";

const awardsData = [
  { img: PartnerPic1, alt: "PC Indie Pitch Winner 2019" },
  { img: PartnerPic2, alt: "DreamHack Best Action 2018" },
  { img: PartnerPic3, alt: "GameConnection Best Hardcore Game 2020" },
  { img: PartnerPic4, alt: "Pixels Winner 2015" },
  { img: PartnerPic5, alt: "GameConnection People's Choice Award 2020" },
];

const Partner = () => {
  return (
    <div className="awards-container">
      <h2 className="awards-title">Our Partners</h2>
      <div className="awards-grid">
        {awardsData.map((award, index) => {
          return (
            <div className="award-item" key={index}>
              <img src={award.img} alt={award.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
