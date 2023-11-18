import React from "react";
import { HashLink } from "react-router-hash-link";
import SpecialsMenu from "./SpecialsMenu";

export default function Menu() {
  return (
    <>
      <ul className="d-md-flex">
        <li className="me-3">
          <HashLink smooth to={"/menu#specials"}>
            Specials
          </HashLink>
        </li>
        <li className="me-3">
          <HashLink smooth to={"/menu#entrees"}>
            Entrees
          </HashLink>
        </li>
        <li className="me-3">
          <HashLink smooth to={"/menu#appetizers"}>
            Appetizers
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/menu#desserts"}>
            Desserts
          </HashLink>
        </li>
      </ul>
      <div className="mb-5">
        <h2 id="special">Specials</h2>
        <SpecialsMenu special="special" />
      </div>
      <div className="mb-5">
        <h2 id="entrees">Entrees</h2>
        <SpecialsMenu category="Entrees" />
      </div>
      <div className="mb-5">
        <h2 id="appetizers">Appetizers</h2>
        <SpecialsMenu category="Appetizers" />
      </div>
      <div className="mb-5">
        <h2 id="desserts">Desserts</h2>
        <SpecialsMenu category="Desserts" />
      </div>
    </>
  );
}
