import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import About from "./About";

export default function AboutPage(props) {
  return (
    <>
      <div>
        <TopOfThePage
          h1="About"
          h2="Here is some information about us"
          topPhoto="/"
        />
      </div>{" "}
      <div>
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
