import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Menu from "./Menu";

export default function MenuPage(props) {
  return (
    <>
      <TopOfThePage h1="Menu" h2="Find our amazing dishes" topPhoto="/" />
      <Menu />
    </>
  );
}
