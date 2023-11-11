import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import BookingPage from "./BookingPage/BookingPage";
import MenuPage from "./MenuPage/MenuPage";
import ThankYouPage from "./PageComponents/ThankYouPage";

export default function Main() {
  return (
    <>
      <main className="container d-md-flex flex-column">
        <p>Main</p>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking-submit" element={<ThankYouPage />} />
        </Routes>
      </main>
    </>
  );
}
