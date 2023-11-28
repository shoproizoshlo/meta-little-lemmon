import React from "react";

export default function FooterContact() {
  return (
    <div className="contact-links mb-4">
      <p className="titel">Contact</p>
      <ul>
        <li>
          <address>
            <span itemScope itemType="http://schema.org/PostalAddress">
              <span itemProp="streetAddress">21 S Racine Ave</span>,{" "}
              <span itemProp="addressLocality">Chicago</span>,{" "}
              <span itemProp="addressRegion">IL</span>{" "}
              <span itemProp="postalCode">60607</span>,{" "}
              <span itemProp="addressCountry">United States</span>
            </span>
          </address>
        </li>
        <li>
          <span itemScope itemType="http://schema.org/ContactPoint">
            <span itemProp="telephone">
              <a href="tel:+13128298697">+13128298697</a>
            </span>
          </span>
        </li>
        <li>
          <span itemScope itemType="http://schema.org/ContactPoint">
            <span itemProp="email">
              <a href="mailto:contact@littlelemon">contact@littlelemon</a>
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}
