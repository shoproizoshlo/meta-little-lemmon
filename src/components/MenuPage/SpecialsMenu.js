import axios from "axios";

import { useState } from "react";
import React from "react";
import DishCard from "./DishCard";

export default function SpecialsMenu(props) {
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
            <div className="row">
              {menu.slice(0, props.displayCount).map((MenuDish) => {
                if (MenuDish[props.special] === "true") {
                  return (
                    <div key={MenuDish["dish-name"]} className="col-3">
                      <DishCard
                        menu={menu}
                        dishId={MenuDish["id"]}
                        setDishId={setDishId}
                      />
                    </div>
                  );
                } else if (MenuDish["category"] === props.category) {
                  return (
                    <div key={MenuDish["dish-name"]} className="col-3">
                      <DishCard
                        menu={menu}
                        dishId={MenuDish["id"]}
                        setDishId={setDishId}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
