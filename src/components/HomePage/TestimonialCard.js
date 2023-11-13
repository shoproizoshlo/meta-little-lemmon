import React from "react";

const TestimonialCard = ({ testimonialItem }) => {
  return (
    <>
      <article className="d-flex flex-column m-3">
        <div
          className="d-flex justify-content-md-start justify-content-sm-center
"
        >
          <img src={testimonialItem["image"]} alt="user photo" />
          <p className="highlight ms-4">{testimonialItem["name"]}</p>
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
