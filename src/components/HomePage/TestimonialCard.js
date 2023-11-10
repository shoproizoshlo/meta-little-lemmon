import React from "react";

const TestimonialCard = ({ testimonialItem }) => {
  return (
    <>
      <article className="d-flex flex-column">
        <div className="d-flex ">
          <img src={testimonialItem["image"]} alt="dish-image" />
          <p>{testimonialItem["name"]}</p>
        </div>
        <p>{testimonialItem["rating"]}</p>
        <p>{testimonialItem["review"]}</p>
      </article>
    </>
  );
};

export default TestimonialCard;
