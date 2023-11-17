import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close-menu.svg";
import "./Nav.css";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
      menu.style.display = "none";
      document.querySelector(".overlay").style.display = "none";
    } else {
      menu.style.display = "block";
      document.querySelector(".overlay").style.display = "block";
    }
  }

  return (
    <>
      <nav className="nav-container">
        <div id="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={CloseIcon} alt="close icon" />
          ) : (
            <img src={HamburgerIcon} alt="menu icon" />
          )}
        </div>
        <ul className="nav-menu" id="menu">
          <li className="q-line" data-target="menu-1">
            <Link to="/">Home</Link>
          </li>
          <li className="q-line" data-target="menu-2">
            <Link to="/about">About</Link>
          </li>
          <li className="q-line" data-target="menu-3">
            <Link to="/booking">Online Reservation</Link>
          </li>
          <li className="q-line" data-target="menu-4">
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
