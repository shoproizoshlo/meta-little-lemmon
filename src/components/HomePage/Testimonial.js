import React from "react";

const Testimonial = ({ testimoId, testimo }) => {
  const testimoCard = testimo.find((testimos) => testimos.id === testimoId);

  return (
    <>
      <article className="d-flex flex-column">
        <div>
          <div className="d-flex">
            <img src={testimoCard["image"]} alt="user photo" />
            <p>{testimoCard["name"]}</p>
          </div>
          <p>{testimoCard["rating"]}</p>
          <p>{testimoCard["review"]}</p>
        </div>
      </article>
    </>
  );
};

export default Testimonial;
