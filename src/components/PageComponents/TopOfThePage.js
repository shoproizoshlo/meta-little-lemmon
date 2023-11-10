import React from "react";
import CallToAction from "./CallToAction";

export default function TopOfThePage(props) {
  return (
    <>
      <article className="first-screen">
        <div className="heading-section container">
          <div className="heading-info">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lille Lemon is a charming neighborhood bistro thatserves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
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
