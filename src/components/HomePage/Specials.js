import axios from "axios";

import { useContext, useState } from "react";
import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import { DataContext } from "../../data/DataContext";
import DishCard from "../PageComponents/DishCard";

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
        <section className="menu-positions">
          <div className="specials">
            <h2>This week specials</h2>
            <CallToAction url="/" callToAction="Online Menu" />
            <div className="menu-list">
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
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
