import React from "react";
import CallToAction from "./CallToAction";
import "./TopOfThePage.css";

export default function TopOfThePage(props) {
  const link = props.url;

  return (
    <>
      <article className="top-of-page" id="top">
        <div className="container-custom d-md-flex justify-content-between pb-5">
          <div>
            <div className="mb-5 pt-5">
              <h1>{props.h1}</h1>
              <h2>{props.h2}</h2>
              <p>{props.text}</p>
            </div>
            <CallToAction callToAction={props.callToAction} onClick={link} />
          </div>
          <div className="heading-image">
            <img src={props.topPhoto} alt="restauran food" />
          </div>
        </div>
      </article>
    </>
  );
}
