import React from "react";
import "./Services.css";
import ImageOne from "../../assets/img/services/img1.png";
import ImageTwo from "../../assets/img/services/img2.png";
import ImageThree from "../../assets/img/services/img3.png";
import ImageFour from "../../assets/img/services/img4.png";
import ImageFive from "../../assets/img/services/img5.png";
import ImageSix from "../../assets/img/services/img6.png";
import ImageSeven from "../../assets/img/services/img7.png";
import ImageEight from "../../assets/img/services/img8.png";
import ImageNine from "../../assets/img/services/img9.png";
import ImageTen from "../../assets/img/services/img10.png";
import ImageEleven from "../../assets/img/services/img11.png";
import ImageTwelve from "../../assets/img/services/img12.png";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const data = [
    {
      img: ImageOne,
      tags: ["Game Art Development", "2D Animation"],
      text: "How to Stylize 2D Characters for Videogames?",
      link: "#",
    },
    {
      img: ImageTwo,
      tags: ["Character Design", "2D Animation"],
      text: "Character Design",
      link: "#",
    },
    {
      img: ImageThree,
      tags: ["Background Design", "2D Animation"],
      text: "Background Design",
      link: "#",
    },
    {
      img: ImageFour,
      tags: ["2D Cutscenes Production", "2D Animation"],
      text: "2D Cutscenes Production",
      link: "#",
    },
    {
      img: ImageFive,
      tags: ["Art Production"],
      text: "Developing Concept Art for Video Games and Animation",
      link: "#",
    },
    {
      img: ImageSix,
      tags: ["Animation Production"],
      text: "Cinematic Trailers for Video Games and Animation",
      link: "#",
    },
    {
      img: ImageSeven,
      tags: ["Animation Production"],
      text: "2D Animation for Video Games and Series",
      link: "#",
    },
    {
      img: ImageEight,
      tags: ["Backgorund Design"],
      text: "Designing Unique 2D Backgrounds for Video Games",
      link: "#",
    },
    {
      img: ImageNine,
      tags: ["Assets Production"],
      text: "Creating Amazing 2D / 3D Assets for Video Games",
      link: "#",
    },
    {
      img: ImageTen,
      tags: ["Assets Production"],
      text: "Our Steps for Designing new Characters",
      link: "#",
    },
    {
      img: ImageEleven,
      tags: ["Assets Production"],
      text: "2D and 3D Assets  for Video Games and Animation",
      link: "#",
    },
    {
      img: ImageTwelve,
      tags: ["Art Production"],
      text: "How to Develop Incredible 2D / 3D Illustrations: Our approach!",
      link: "#",
    },
  ];

  return (
    <>
      <div className="services" id="services">
        <div className="services__container">
          <h3 style={{ textAlign: "center" }}>
            Our team has remarkable experience visually developing beautiful
            looking video games from <br />
            the ground up and successfully creating enchanting 2d animations
          </h3>

          <div className="service_items">
            {data.map((item, index) => (
              <ServiceItem
                key={index}
                img={item.img}
                tags={item.tags}
                text={item.text}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
