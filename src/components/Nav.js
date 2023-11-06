import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="d-md-flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Online Reservation</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
