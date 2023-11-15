import React from "react";
import TopOfThePage from "../PageComponents/TopOfThePage";
import Menu from "./Menu";

export default function MenuPage() {
  return (
    <>
      <div>
        <TopOfThePage h1="Menu" h2="Find our amazing dishes" topPhoto="/" />
      </div>
      <div className="container-custom">
        <Menu />
      </div>
    </>
  );
}
