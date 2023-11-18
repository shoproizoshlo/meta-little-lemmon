import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import DishCard from "./DishCard";
import "./SpecialsMenu.css";

export default function SpecialsMenu(props) {
  const [dishId, setDishId] = useState();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get(`https://little-lemon-restaurant-database.onrender.com/menu`)
      .then((response) => {
        setMenu(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <article>
        <section>
          <div>
            <div className="d-md-flex flex-wrap justify-content-between">
              {menu.slice(0, props.displayCount).map((MenuDish) => {
                if (
                  MenuDish[props.special] === "true" ||
                  MenuDish["category"] === props.category
                ) {
                  return (
                    <div
                      key={MenuDish["dish-name"]}
                      className="menu-position-item mb-5"
                    >
                      <DishCard menu={menu} dishId={MenuDish["id"]} />
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
