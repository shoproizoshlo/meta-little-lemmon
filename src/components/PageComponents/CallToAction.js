import React from "react";

export default function CallToAction(props) {
  return (
    <>
      <button type={props.type} className="yellow-button">
        <a href={props.url} rel="noreferrer">
          {props.callToAction}
        </a>
      </button>
    </>
  );
}
