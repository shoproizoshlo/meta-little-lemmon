import React from "react";
import "./DishCard.css";

const DishCard = ({ dishId, menu }) => {
  const specialsCard = menu.find((dish) => dish.id === dishId);

  return (
    <>
      <article className="d-flex flex-column">
        <img
          src={specialsCard["dish-image"]}
          alt="dish"
          className="dish-image"
        />
        <div className="dish-description d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <p className="titel">{specialsCard["dish-name"]}</p>
            <p className="highlight">${specialsCard["dish-price"]}</p>
          </div>
          <div>
            <p>{specialsCard["dish-details"]}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DishCard;
