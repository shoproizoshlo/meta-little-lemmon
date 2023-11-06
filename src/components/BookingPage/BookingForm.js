import React from "react";
import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  function handleDateChange(e) {
    const newSelectedDate = e.target.value;
    setSelectedDate(newSelectedDate);
    dispatch({ type: "UPDATE_TIMES", date: newSelectedDate });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <p>This is BookingForm</p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: 200, gap: 20 }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        >
          <option>1</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {/* <input type="submit" defaultValue="Make Your reservation" /> */}
        <button type="submit">Book Now</button>
      </form>
    </>
  );
}
