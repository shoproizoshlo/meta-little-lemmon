import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import SpecialsMenu from "../MenuPage/SpecialsMenu";

export default function Specials() {
  return (
    <>
      <article className="container">
        <section>
          <div className="d-md-flex justify-content-between mb-5">
            <h2>This week specials</h2>
            <CallToAction url="/" callToAction="Online Menu" />
          </div>
          <SpecialsMenu displayCount={3} special="special" />
        </section>
      </article>
    </>
  );
}
