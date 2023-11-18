import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import "./Header.css";
import Logo from "../assets/Logo.svg";

export default function Header() {
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
      <div className="overlay" onClick={toggleMenu}></div>
      <header className="d-flex justify-content-between justify-content-md-center align-items-center mt-4 ps-4 pe-4">
        <img src={Logo} alt="logo" />
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
