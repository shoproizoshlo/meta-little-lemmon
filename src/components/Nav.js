import React from "react";
import { HashLink } from "react-router-hash-link";
import HamburgerIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close-menu.svg";
import "./Nav.css";

export default function Nav(props) {
  const menuClose = () => {
    props.isMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-container">
        <div id="menu-icon" onClick={props.toggleMenu}>
          {props.isMenuOpen ? (
            <img src={CloseIcon} alt="close icon" />
          ) : (
            <img src={HamburgerIcon} alt="menu icon" />
          )}
        </div>
        <ul className="nav-menu" id="menu">
          <li className="q-line" data-target="menu-1" id="homepage">
            <HashLink smooth to={"/#homepage"} onClick={menuClose}>
              Home
            </HashLink>
          </li>
          <li className="q-line" data-target="menu-2" id="aboutpage">
            <HashLink smooth to={"/about#aboutpage"}>
              About
            </HashLink>
          </li>
          <li
            className="q-line"
            data-target="menu-3"
            id="bookingpage"
            onClick={menuClose}
          >
            <HashLink smooth to={"/booking"}>
              Online Reservation
            </HashLink>
          </li>
          <li className="q-line" data-target="menu-4" id="menupage">
            <HashLink smooth to={"/menu"} onClick={menuClose}>
              Menu
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
