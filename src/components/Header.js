import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import Nav from "./Nav";
import Logo from "../assets/Logo.svg";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to navigate to the home page
  const goToHomePage = () => {
    navigate("/"); // Update the path based on your home page route
  };

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
    let menu = document.getElementById("menu");

    if (window.innerWidth < 767) {
      if (menu.style.display === "block") {
        menu.style.display = "none";
        document.querySelector(".overlay").style.display = "none";
      } else {
        menu.style.display = "block";
        document.querySelector(".overlay").style.display = "block";
      }
    }
  }
  return (
    <>
      <div className="overlay" onClick={toggleMenu}></div>
      <header className="d-flex justify-content-between justify-content-md-center align-items-center fixed-top pt-2 pe-4 pb-2 ps-4">
        <img src={Logo} alt="logo" onClick={goToHomePage} />
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
