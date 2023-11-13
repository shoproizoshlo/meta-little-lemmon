import React from "react";
import CallToAction from "./CallToAction";
import "./TopOfThePage.css";

export default function TopOfThePage(props) {
  return (
    <>
      <article className="top-of-page">
        <div className="container d-flex justify-content-between">
          <div>
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
            <p>{props.text}</p>
            <CallToAction url={props.url} callToAction={props.callToAction} />
          </div>
          <div>
            <img src={props.topPhoto} alt="restauran food" />
          </div>
        </div>
      </article>
    </>
  );
}
