import React from "react";
import { useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

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
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
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
        <input type="submit" defaultValue="Make Your reservation" />
      </form>
    </>
  );
}
