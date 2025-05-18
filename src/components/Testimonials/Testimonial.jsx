// TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    quote: "The overall aesthetic of The Last Friend is also a visual comfort.",
    name: "Jake Su",
    source: "www.geekculture.co",
  },
  {
    quote: "An absolute gem in modern gaming!",
    name: "Emily Chan",
    source: "www.gamesradar.com",
  },
  {
    quote: "Refreshing design and brilliant concept.",
    name: "Ryan Lee",
    source: "www.ign.com",
  },
  {
    quote: "A heartwarming game with fantastic visuals.",
    name: "Sophia Tan",
    source: "www.kotaku.com",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="testimonial-slider-wrapper">
      <h2>WHAT THE CRITICS & PRESS THINK ABOUT OUR WORK</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{t.quote}"</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <a
              className="testimonial-source"
              href={`https://${t.source}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.source}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
