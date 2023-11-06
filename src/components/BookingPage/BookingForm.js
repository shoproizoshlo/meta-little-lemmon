import React from "react";

export default function BookingForm() {
  return (
    <>
      <p>This is BookingForm</p>
      <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          name="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" defaultValue="Make Your reservation" />
      </form>
    </>
  );
}
