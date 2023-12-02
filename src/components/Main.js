import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import BookingPage from "./BookingPage/BookingPage";
import MenuPage from "./MenuPage/MenuPage";
import ThankYouPage from "./PageComponents/ThankYouPage";
import Undefined from "./PageComponents/Undefined";

export default function Main() {
  return (
    <>
      <main className="d-md-flex flex-column" id="maintop">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/booking/undefined" element={<Undefined />} />
        </Routes>
      </main>
    </>
  );
}
