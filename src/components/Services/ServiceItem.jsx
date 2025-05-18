import React from "react";

const ServiceItem = ({ key, img, tags, text, link }) => {
  return (
    <div key={key}>
      <div className="service__card">
        <div className="service__item">
          <img src={img} alt="service" />
          <div className="overlay"></div>

          <div className="service__content">
            <div>
              <div className="service__tags">
                {tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <div className="service__text">
                <h3>{text}</h3>
              </div>
            </div>

            <div className="service__button">
              <a href={link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
