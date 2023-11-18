import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import About from "./About";
import Chefs from "../../assets/Mario-and-Adrian-A.jpg";
import "./AboutPage.css";

export default function AboutPage(props) {
  return (
    <>
      <div className="top-about">
        <TopOfThePage
          h1="About"
          text="Lille Lemon is a charming neighborhood bistro thatserves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials."
          topPhoto={Chefs}
        />
      </div>
      <div className="about-description">
        <About
          description="Little Lemon Restaurant in Chicago is a charming culinary gem known for
        its delightful fusion of flavors and warm, welcoming atmosphere. This
        hidden gem specializes in serving up a delectable array of dishes that
        feature zesty lemon-infused recipes, adding a refreshing twist to
        classic favorites. From zesty lemon-infused entrees to mouthwatering
        desserts, Little Lemon Restaurant offers a unique dining experience that
        is sure to leave your taste buds tingling with joy. Discover the perfect
        blend of citrus and savory at this must-visit Chicago eatery."
        />
      </div>
    </>
  );
}
