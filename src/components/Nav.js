import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-close-menu.svg";
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

    // click on the menu toggle buttons
    const toggleLine = document.querySelectorAll(".q-line");

    let currentOpenLine = null;

    toggleLine.forEach((line, index) => {
      line.addEventListener("click", () => {
        const targetId = line.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (currentOpenLine && currentOpenLine !== line) {
          const currentTargetId = currentOpenLine.getAttribute("data-target");
          const currentTargetElement = document.getElementById(currentTargetId);

          currentTargetElement.classList.remove("open");
          currentOpenLine.classList.remove("closing");
        }

        if (targetElement.classList.contains("open")) {
          targetElement.classList.remove("open");
        } else {
          targetElement.classList.add("open");
        }

        currentOpenLine = line;
      });
    });
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
