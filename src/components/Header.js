import React from "react";
import Nav from "./Nav";
import "./Header.css";
import Logo from "../images/Logo.svg";

export default function Header() {
  return (
    <>
      <div className="overlay"></div>
      <header className="d-flex justify-content-between justify-content-md-center align-items-center mt-4 ps-4 pe-4">
        <img src={Logo} alt="logo" />
        <Nav />
      </header>
    </>
  );
}
