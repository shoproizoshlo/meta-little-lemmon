import axios from "axios";

import { useState } from "react";
import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import DishCard from "./SpecialsCard";

export default function SpecialsMenu() {
  const [dishId, setDishId] = useState();
  const [menu, setMenu] = useState([]);
  axios
    .get(`https://little-lemon-restaurant-database.onrender.com/menu`)
    .then((response) => {
      setMenu(response.data);
    })
    .catch((error) => console.log(error));

  return (
    <>
      {menu.map((MenuDish) => {
        if (MenuDish["special"] === "true") {
          return (
            <DishCard
              menu={menu}
              key={MenuDish["dish-name"]}
              dishId={MenuDish["id"]}
              setDishId={setDishId}
            />
          );
        }
      })}
    </>
  );
}
