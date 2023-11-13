import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import About from "../AboutPage/About";

export default function HomePage() {
  return (
    <>
      <div>
        <TopOfThePage
          h1="Little Lemon"
          h2="Chicago"
          text="Lille Lemon is a charming neighborhood bistro thatserves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials."
          url="/booking"
          callToAction="Reserve a Table"
          topPhoto="/"
        />
      </div>
      <div>
        <Specials />
      </div>
      <div>
        <CustomersSay displayCountMin={0} displayCountMax={2} />
        <CustomersSay displayCountMin={2} displayCountMax={4} />
      </div>
      <div>
        <About
          description="Little Lemon Restaurant in Chicago: A citrus-infused culinary haven. Savor a unique blend of zesty flavors in every dish, from appetizers to desserts. Experience a refreshing twist on classic favorites. Your taste buds will thank you!"
          topPhoto="/"
        />
      </div>
    </>
  );
}
