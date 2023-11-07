import React from "react";
import { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";

// function reducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       return action.times;

//     default:
//       return state;
//   }
// }

// const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// change the availableTimes based on the selected date
// export function updateTimes(selectedDate) {
//   return initialTimes;
// }

// create the initial state for the availableTimes
// export function initializeTimes() {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// }

export default function Main() {
  // const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

  return (
    <>
      <main className="container d-md-flex flex-column">
        <p>Main</p>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
    </>
  );
}
