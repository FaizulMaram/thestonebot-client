import React from "react";
import ImageOne from "../../assets/img/projects/Background-1.png";
import ImageTwo from "../../assets/img/projects/Background-2.png";
import ImageThree from "../../assets/img/projects/Background-3.png";
import ImageFour from "../../assets/img/projects/Background-4.png";
import ImageFive from "../../assets/img/projects/Background-5.png";
import "./Project.css";

const Project = () => {
  const data = [
    {
      img: ImageFive,
      link: "#",
      title: "2D Animation",
    },
    {
      img: ImageOne,
      link: "#",
      title: "Game Art Development",
    },
    {
      img: ImageTwo,
      link: "#",
      title: "Character Design",
    },
    {
      img: ImageThree,
      link: "#",
      title: "Background Design",
    },
    {
      img: ImageFour,
      link: "#",
      title: "2D Cutscenes Production",
    },
  ];

  return (
    <div className="project_background">
      <div className="content container">
        <h1>How we can help you</h1>
        <p className="subtitle">
          Need a reliable and talented team to lend you a hand on your epic game
          art project?
        </p>
        <div className="grid">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`card ${`card${index + 1}`}`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="grid-two">
          {data.slice(3).map((item, index) => (
            <div
              key={index + 3}
              className={`card ${`card${index + 4}`}`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <button className="project-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Project;
