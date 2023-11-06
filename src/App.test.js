import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingPage/BookingForm";
import { initializeTimes } from "./components/Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

const expect = require("expect");

test("initializeTimes should return an array of times", () => {
  const times = initializeTimes();
  expect(times).toBeDefined();
  expect(times).toBeInstanceOf(Array);
  expect(times.length).toBeGreaterThan(0);
});
