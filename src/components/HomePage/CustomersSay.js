import React from "react";
import Testimonials from "./Testimonials";
import "./CustomersSay.css";

export default function CustomersSay() {
  return (
    <div className="container customers-say">
      <div className="d-flex justify-content-center mb-5">
        <h2>Customers say</h2>
      </div>
      <Testimonials displayCountMin={0} displayCountMax={2} />
      <Testimonials displayCountMin={2} displayCountMax={4} />
    </div>
  );
}
