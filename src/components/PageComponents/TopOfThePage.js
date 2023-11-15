import React from "react";
import CallToAction from "./CallToAction";
import "./TopOfThePage.css";

export default function TopOfThePage(props) {
  return (
    <>
      <article className="top-of-page">
        <div className="container d-md-flex justify-content-between pb-5">
          <div>
            <div className="mb-5 pt-5">
              <h1>{props.h1}</h1>
              <h2>{props.h2}</h2>
              <p>{props.text}</p>
            </div>
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
