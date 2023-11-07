import React from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <>
      <p>This is booking page</p>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
