import React from "react";

const TestimonialCard = ({ testimonialItem }) => {
  return (
    <>
      <article className="d-flex flex-column m-3">
        <div className="d-flex">
          <img src={testimonialItem["image"]} alt="dish" />
          <p className="highlight">{testimonialItem["name"]}</p>
        </div>
        <div>
          <p className="highlight">{testimonialItem["rating"]}</p>
        </div>
        <p>{testimonialItem["review"]}</p>
      </article>
    </>
  );
};

export default TestimonialCard;
