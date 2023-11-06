import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="d-md-flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Online Reservation</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
