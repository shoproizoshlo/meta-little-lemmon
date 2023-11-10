import axios from "axios";

import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../data/DataContext";

const DishCard = ({ dishId, setOrderPopOpen, setDishId, menu }) => {
  const handleOrderPopUp = () => {
    setDishId(dishId);
    setOrderPopOpen(true);
  };

  const renderDishCard = () => {
    const dishCard = menu[0];
    // const dishCard = menu.map((dish) => dish.id === dishId);

    return (
      <article className="DishCard">
        <img className="DishImage" src={dishCard["dish-image"]} alt="error" />
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
          <button className="delivery-btn" onClick={() => handleOrderPopUp()}>
            Order a Delivery
          </button>
        </div>
      </article>
    );
  };

  return <div>{renderDishCard()}</div>;
};

export default DishCard;
