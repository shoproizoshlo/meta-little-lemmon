import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <p>This is booking page</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
}
