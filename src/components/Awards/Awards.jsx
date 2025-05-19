import React from "react";
import "./Awards.css";

import AwardsPic1 from "../../assets/img/awards/c1.png";
import AwardsPic2 from "../../assets/img/awards/c2.png";
import AwardsPic3 from "../../assets/img/awards/c3.png";
import AwardsPic4 from "../../assets/img/awards/c4.png";
import AwardsPic5 from "../../assets/img/awards/c5.png";
import AwardsPic6 from "../../assets/img/awards/c6.png";
import AwardsPic7 from "../../assets/img/awards/c7.png";
import AwardsPic8 from "../../assets/img/awards/c8.png";
import AwardsPic9 from "../../assets/img/awards/c9.png";
import AwardsPic10 from "../../assets/img/awards/c10.png";
import AwardsPic11 from "../../assets/img/awards/c11.png";
import AwardsPic12 from "../../assets/img/awards/c12.png";
import AwardsPic13 from "../../assets/img/awards/c13.png";
import AwardsPic14 from "../../assets/img/awards/c14.png";

const awardsData = [
  { img: AwardsPic1, alt: "PC Indie Pitch Winner 2019" },
  { img: AwardsPic2, alt: "DreamHack Best Action 2018" },
  { img: AwardsPic3, alt: "GameConnection Best Hardcore Game 2020" },
  { img: AwardsPic4, alt: "Pixels Winner 2015" },
  { img: AwardsPic5, alt: "GameConnection People's Choice Award 2020" },
  { img: AwardsPic6, alt: "Xsolla XDC Latam Finalist 2021" },
  { img: AwardsPic7, alt: "Brazil's Independent Games Festival Finalist 2018" },
  { img: AwardsPic8, alt: "Indie World Order Official Selection 2020" },
  { img: AwardsPic9, alt: "MIX Evo Official Selection 2018" },
  { img: AwardsPic10, alt: "MIX E3 Developer Showcase 2019" },
  { img: AwardsPic11, alt: "PAX South Latinx Lounge Official Selection 2019" },
  { img: AwardsPic12, alt: "Boston FIG Fest Official Selection 2017" },
  { img: AwardsPic13, alt: "Boston FIG Fest Showcase Game 2016" },
  { img: AwardsPic14, alt: "Game On Ventures Official Selection 2016" },
];

const Awards = () => {
  return (
    <div className="awards-container">
      <h2 className="awards-title">Awards</h2>
      <div className="awards_grid">
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

export default Awards;
