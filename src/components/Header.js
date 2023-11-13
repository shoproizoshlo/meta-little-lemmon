import React from "react";
import Nav from "./Nav";
import "./Header.css";
import Logo from "../images/Logo.svg";

export default function Header() {
  return (
    <>
      <header className="container d-flex justify-content-between justify-content-md-center align-items-center">
        <img src={Logo} alt="logo" />
        <Nav />
      </header>
    </>
  );
}
