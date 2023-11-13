import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../images/icon-hamburger.svg";
import "./Nav.css";

export default function Nav() {
  function teste() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
  return (
    <>
      <nav className="nav-container">
        <div id="menu-icon">
          <img onClick={teste} src={HamburgerIcon} alt="hamburger icon" />
        </div>
        <ul className="nav-menu" id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/booking">Online Reservation</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
