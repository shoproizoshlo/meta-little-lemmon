import axios from "axios";

import { useState } from "react";
import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function CustomersSay() {
  const [testimonial, setTestimonial] = useState([]);
  axios
    .get(`https://little-lemon-restaurant-database.onrender.com/testimonials`)
    .then((response) => {
      setTestimonial(response.data);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <article className="container">
        <section>
          <div className="d-md-flex justify-content-between">
            {testimonial.map((testimonialItem) => {
              return (
                <div
                  key={testimonialItem["name"]}
                  className="d-flex flex-column"
                >
                  <TestimonialCard
                    testimonialItem={testimonialItem}
                    key={testimonialItem["name"]}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}
