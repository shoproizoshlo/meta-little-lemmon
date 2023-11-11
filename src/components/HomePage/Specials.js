import axios from "axios";

import { useState } from "react";
import React from "react";
import CallToAction from "../PageComponents/CallToAction";
import SpecialsMenu from "./SpecialsMenu";
import DishCard from "./SpecialsCard";

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
              {menu
                .map((MenuDish) => {
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
                })
                .slice(0, 3)}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
