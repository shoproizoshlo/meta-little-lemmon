import axios from "axios";

import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../data/DataContext";

const DishCard = ({ dishId, setOrderPopOpen, setDishId, menu }) => {
  const renderDishCard = () => {
    // const dishCard = menu[0];
    const dishCard = menu.find((dish) => dish.id === dishId);

    console.log(dishCard);

    return (
      <article className="DishCard">
        <img
          className="DishImage"
          src={dishCard["dish-image"]}
          alt="dish-image   "
        />
        <div className="dish-details">
          <div className="dish-title-cost-box">
            <span className="cardTitle">{dishCard["dish-name"]}</span>
            <span className="costText">$ {dishCard["dish-price"]}</span>
          </div>
          <div>
            <p className="paragraphText">{dishCard["dish-details"]}</p>
          </div>
        </div>
        <div className="delivery-btn-box">
          <button className="delivery-btn">Order a Delivery</button>
        </div>
      </article>
    );
  };

  return <div>{renderDishCard()}</div>;
};

export default DishCard;
