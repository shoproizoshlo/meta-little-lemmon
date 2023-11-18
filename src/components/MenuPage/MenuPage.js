import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Menu from "./Menu";
import Chefs from "../../assets/Mario-and-Adrian-B.jpg";
import "./MenuPage.css";

export default function MenuPage() {
  return (
    <>
      <div className="menu-top">
        <TopOfThePage
          h1="Menu"
          text="Find our amazing dishes"
          topPhoto={Chefs}
        />
      </div>
      <div className="container-custom">
        <Menu />
      </div>
    </>
  );
}
