import React from "react";
import { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;

    default:
      return state;
  }
}

const initialTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

export default function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

  // change the availableTimes based on the selected date
  function updateTimes(selectedDate) {
    return initialTimes;
  }

  // create the initial state for the availableTimes
  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  return (
    <>
      <main className="container d-md-flex flex-column">
        <p>Main</p>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}
