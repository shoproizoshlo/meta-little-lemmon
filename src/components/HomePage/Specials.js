import React from "react";
import CallToAction from "../PageComponents/CallToAction";

export default function Specials() {
  return (
    <>
      <article>
        <div className="specials">
          <h2>This week specials</h2>
          <CallToAction url="/" callToAction="Online Menu" />
        </div>
        <section className="menu-positions"></section>
      </article>
    </>
  );
}
