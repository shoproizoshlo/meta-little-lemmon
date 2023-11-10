import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Specials from "./Specials";

export default function HomePage() {
  return (
    <>
      <TopOfThePage
        h1="Little Lemon"
        h2="Chicago"
        text="Lille Lemon is a charming neighborhood bistro thatserves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials."
        url="/booking"
        callToAction="Reserve a Table"
      />
      This is a homepage
      <Specials />
    </>
  );
}
