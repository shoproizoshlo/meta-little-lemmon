import axios from "axios";
import { useState } from "react";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

export default function Testimonials(props) {
  const [testimonial, setTestimonial] = useState([]);
  axios
    .get(`https://little-lemon-restaurant-database.onrender.com/testimonials`)
    .then((response) => {
      setTestimonial(response.data);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <article className="testimonials">
        <section>
          <div className="d-md-flex  justify-content-between">
            {testimonial
              .slice(props.displayCountMin, props.displayCountMax)
              .map((testimonialItem) => {
                return (
                  <div
                    key={testimonialItem["name"]}
                    className="testimonial d-flex"
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
