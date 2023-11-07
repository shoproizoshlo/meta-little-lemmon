import React from "react";
import { useState } from "react";

export default function BookingForm(props) {
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
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
          value={date}
          onChange={(e) => handleDateChange(e)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="res-time">
          {finalTime}
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
