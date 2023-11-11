import React from "react";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";
import FooterContact from "./Footer/FooterContact";
import SocialMediaLinks from "./Footer/SocialMediaLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="container d-md-flex">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <FooterContact />
        </div>
        <div>
          <SocialMediaLinks />
        </div>
      </footer>
    </>
  );
}
