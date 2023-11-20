import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HamburgerIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close-menu.svg";
import "./Nav.css";

export default function Nav(props) {
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
          <li className="q-line" data-target="menu-1">
            <Link to="/">
              <HashLink smooth to={"/#home"}>
                Home
              </HashLink>
            </Link>
          </li>
          <li className="q-line" data-target="menu-2">
            <Link to="/about">
              <HashLink smooth to={"/about#about"}>
                About
              </HashLink>
            </Link>
          </li>
          <li className="q-line" data-target="menu-3">
            <Link to="/booking">
              <HashLink smooth to={"/booking#booking"}>
                Online Reservation
              </HashLink>
            </Link>
          </li>
          <li className="q-line" data-target="menu-4">
            <Link to="/menu">
              <HashLink smooth to={"/menu#menu"}>
                Menu
              </HashLink>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
