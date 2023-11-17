import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonialItem }) => {
  const rating = parseInt(testimonialItem["rating"], 10) || 0;

  // Array to store the repeated icons
  const ratingIcons = Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faLemon}
      size="xl"
      className="lemon-icon"
    />
  ));

  return (
    <>
      <article className="d-flex flex-column m-3">
        <div
          className="d-flex justify-content-center justify-content-md-start align-items-center
"
        >
          <img
            src={testimonialItem["image"]}
            alt="user"
            className="user-photo"
          />
          <p className="highlight ms-4  mb-0">{testimonialItem["name"]}</p>
        </div>
        <div>
          <p className="highlight mt-3">
            {testimonialItem["rating"]} {ratingIcons}
          </p>
        </div>
        <p>{testimonialItem["review"]}</p>
      </article>
    </>
  );
};

export default TestimonialCard;
