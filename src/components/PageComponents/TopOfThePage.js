import React from "react";
import CallToAction from "./CallToAction";

export default function TopOfThePage(props) {
  return (
    <>
      <article className="first-screen">
        <div className="heading-section container">
          <div className="heading-info">
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
            <p>{props.text}</p>
            <CallToAction url={props.url} callToAction={props.callToAction} />
          </div>
          <div className="heading-image">
            <img src={props.topPhoto} alt="restauran food" />
          </div>
        </div>
      </article>
    </>
  );
}
