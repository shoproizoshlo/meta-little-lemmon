import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
            <Link to="/">Online Reservation</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<About />} />
        </Routes>
      </nav>
    </>
  );
}
