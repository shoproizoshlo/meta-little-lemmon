import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="d-md-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/booking">Online Reservation</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}