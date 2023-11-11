import React from "react";
import { Link } from "react-router-dom";
import SpecialsMenu from "./SpecialsMenu";

export default function Menu() {
  return (
    <>
      <ul className="d-md-flex">
        <li>
          <Link to="/menu/specials">Specials</Link>
        </li>
        <li>
          <Link to="/menu/entrees">Entrees</Link>
        </li>
        <li>
          <Link to="/menu/appetizers">Appetizers</Link>
        </li>
        <li>
          <Link to="/menu/desserts">Desserts</Link>
        </li>
      </ul>
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
