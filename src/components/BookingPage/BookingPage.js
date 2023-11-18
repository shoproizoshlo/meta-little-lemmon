import React from "react";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import BookingForm from "./BookingForm";
import TopOfThePage from "../PageComponents/TopOfThePage";
import "./BookingPage.css";

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
      <div className="booking-top">
        <TopOfThePage h1="Reserve a table" topPhoto="/" />
      </div>
      <div className="container-custom mt-5 mb-5">
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      </div>
    </>
  );
}
