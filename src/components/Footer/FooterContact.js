import React from "react";

export default function FooterContact() {
  return (
    <div className="contact-links">
      <h6>Contact</h6>
      <ul>
        <li>
          <span itemScope itemType="http://schema.org/PostalAddress">
            <strong itemProp="streetAddress">21 S Racine Ave</strong>,{" "}
            <span itemProp="addressLocality">Chicago</span>,{" "}
            <span itemProp="addressRegion">IL</span>{" "}
            <span itemProp="postalCode">60607</span>,{" "}
            <span itemProp="addressCountry">United States</span>
          </span>
        </li>
        <li>
          <span itemScope itemType="http://schema.org/ContactPoint">
            <strong itemProp="telephone">
              <a href="tel:+13128298697">+13128298697</a>
            </strong>
          </span>
        </li>
        <li>
          <span itemScope itemType="http://schema.org/ContactPoint">
            <strong itemProp="email">
              <a href="mailto:contact@littlelemon">contact@littlelemon</a>
            </strong>
          </span>
        </li>
      </ul>
    </div>
  );
}
