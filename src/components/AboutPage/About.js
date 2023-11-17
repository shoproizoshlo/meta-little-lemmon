import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <>
      <div className="about container-custom d-md-flex justify-content-between align-items-center">
        <div className="ms-1">
          <h2>{props.h2}</h2>
          <p>{props.description}</p>
        </div>
        <div className="about-image">
          <img src={props.aboutImage} alt="restaurant food" />
        </div>
      </div>
    </>
  );
}
