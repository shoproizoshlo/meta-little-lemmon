import React from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

export function updateTimes(date) {
  console.log("fetchAPI", date, fetchAPI(date));
  return fetchAPI(date);
}
export default function BookingPage() {
  const output = fetchAPI(new Date());
  console.log("output", output);

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <>
      <p>This is booking page</p>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
