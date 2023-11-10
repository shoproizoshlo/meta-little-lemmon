import React from "react";

const DishCard = ({ dishId, menu }) => {
  const dishCard = menu.find((dish) => dish.id === dishId);

  return (
    <article className="d-flex flex-column">
      <img src={dishCard["dish-image"]} alt="dish-image" />
      <div className="d-flex flex-column">
        <div className="d-flex ">
          <p>{dishCard["dish-name"]}</p>
          <p>$ {dishCard["dish-price"]}</p>
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

export default DishCard;
