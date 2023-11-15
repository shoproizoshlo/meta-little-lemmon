import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <>
      <div className="about container-custom">
        <div>
          <h2>{props.h2}</h2>
          <p>{props.description}</p>
        </div>
        <div className="about-image">
          <img src={props.topPhoto} alt="restaurant food" />
        </div>
      </div>
    </>
  );
}
