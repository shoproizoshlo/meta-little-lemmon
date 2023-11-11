import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container d-flex">
        <p>{props.description}</p>
        <div>
          <img src={props.topPhoto} alt="restauran food" />
        </div>
      </div>
    </>
  );
}
