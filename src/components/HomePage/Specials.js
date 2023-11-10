import axios from "axios";

import { useState } from "react";
import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import DishCard from "./DishCard";

export default function Specials() {
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
      <article>
        <section>
          <div>
            <h2>This week specials</h2>
            <CallToAction url="/" callToAction="Online Menu" />
            <div className="d-flex">
              {menu.slice(0, 3).map((MenuDish) => {
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
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
