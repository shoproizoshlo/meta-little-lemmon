import React from "react";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";
import FooterContact from "./Footer/FooterContact";
import SocialMediaLinks from "./Footer/SocialMediaLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="d-md-flex justify-content-between mb-5">
            <div className="d-flex justify-content-center align-items-start">
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
          </div>
          <div className="d-flex flex-column align-items-center">
            This is final project for Meta Front-End certification. Created by
            Sue Brechko. See you on GitHub 🫶🏻
          </div>
        </div>
      </footer>
    </>
  );
}
