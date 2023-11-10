import axios from "axios";

import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../data/DataContext";

const DishCard = ({ dishId, setOrderPopOpen, setDishId, menu }) => {
  const renderDishCard = () => {
    // const dishCard = menu[0];
    const dishCard = menu.find((dish) => dish.id === dishId);

    console.log(dishCard);

    return (
      <article>
        <img src={dishCard["dish-image"]} alt="dish-image" />
        <div>
          <div>
            <span>{dishCard["dish-name"]}</span>
            <span>$ {dishCard["dish-price"]}</span>
          </div>
          <div>
            <p>{dishCard["dish-details"]}</p>
          </div>
        </div>
        <div>
          <button>Order a Delivery</button>
        </div>
      </article>
    );
  };

  return <div>{renderDishCard()}</div>;
};

export default DishCard;
