import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import SpecialsMenu from "../MenuPage/SpecialsMenu";

export default function Specials() {
  return (
    <>
      <article>
        <section>
          <div>
            <h2>This week specials</h2>
            <CallToAction url="/" callToAction="Online Menu" />
            <SpecialsMenu displayCount={3} />
          </div>
        </section>
      </article>
    </>
  );
}
