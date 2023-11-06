import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingPage/BookingForm";
import { initializeTimes } from "./components/Main";
import { updateTimes } from "./components/Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes should return an array of times", () => {
  const times = initializeTimes();
  expect(times).toBeDefined();
  expect(times).toBeInstanceOf(Array);
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes should return the same value as provided in the state", () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  expect(updateTimes(currentState)).toEqual(currentState);
});
