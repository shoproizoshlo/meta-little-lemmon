import React from "react";
import Nav from "./Nav";
import Logo from "../assets/Logo.svg";
import FooterContact from "./Footer/FooterContact";
import SocialMediaLinks from "./Footer/SocialMediaLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-custom">
          <div className="footer-container d-md-flex align-items-start justify-content-between mb-5">
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
          <div className="copyright d-flex flex-column align-items-center">
            This is final project for Meta Front-End certification. Created by
            Sue Brechko. See you on{" "}
            <a
              href="https://github.com/shoproizoshlo/meta-little-lemmon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            🫶🏻
          </div>
        </div>
      </footer>
    </>
  );
}
