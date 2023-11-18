import React from "react";
import "./DishCard.css";

const DishCard = ({ dishId, menu }) => {
  const specialsCard = menu.find((dish) => dish.id === dishId);
  console.log(specialsCard["dish-image"]);

  return (
    <>
      <article className="d-flex flex-column">
        <div className="dish-image">
          <img src={specialsCard["dish-image"]} alt="dish" />
        </div>
        <div className="dish-description d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <p className="titel me-2">{specialsCard["dish-name"]}</p>
            <p className="highlight price">${specialsCard["dish-price"]}</p>
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
