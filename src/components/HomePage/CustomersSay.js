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
      <article>
        <section>
          <div className="d-flex flex-column">
            <div className="d-flex">
              {testimonial.slice(0, 2).map((testimonialItem) => {
                return (
                  <TestimonialCard
                    testimonialItem={testimonialItem}
                    key={testimonialItem["name"]}
                  />
                );
              })}
            </div>
            <div className="d-flex">
              {testimonial.slice(2, 5).map((testimonialItem) => {
                console.log("customers", testimonialItem);
                return (
                  <TestimonialCard
                    testimonialItem={testimonialItem}
                    key={testimonialItem["name"]}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
