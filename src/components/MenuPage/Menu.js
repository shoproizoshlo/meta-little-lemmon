import React from "react";
import SpecialsMenu from "./SpecialsMenu";

export default function Menu() {
  return (
    <>
      <p>Specials</p>
      <SpecialsMenu special="special" />
      <p>Entrees</p>
      <SpecialsMenu category="Entrees" />
      <p>Appetizers</p>
      <SpecialsMenu category="Appetizers" />
      <p>Desserts</p>
      <SpecialsMenu category="Desserts" />
    </>
  );
}
