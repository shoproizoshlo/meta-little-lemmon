import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import SpecialsMenu from "../MenuPage/SpecialsMenu";
import "./Specials.css";

export default function Specials() {
  return (
    <>
      <article className="container-custom">
        <section>
          <div className="specials d-flex align-items-center justify-content-between mb-5">
            <h2>This week specials</h2>
            <CallToAction onClick="/menu" callToAction="Online Menu" />
          </div>
          <SpecialsMenu displayCount={3} special="special" />
        </section>
      </article>
    </>
  );
}
