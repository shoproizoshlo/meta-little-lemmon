import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import About from "../AboutPage/About";
import HomepageTopImage from "../../images/restauranfood.jpg";

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
          topPhoto={HomepageTopImage}
        />
      </div>
      <div>
        <Specials />
      </div>
      <div>
        <CustomersSay />
      </div>
      <div>
        <About
          h2="About us"
          description="Little Lemon Restaurant in Chicago: A citrus-infused culinary haven. Savor a unique blend of zesty flavors in every dish, from appetizers to desserts. Experience a refreshing twist on classic favorites. Your taste buds will thank you!"
          topPhoto="/"
        />
      </div>
    </>
  );
}
