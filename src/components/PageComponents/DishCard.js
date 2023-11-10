import React from "react";

const DishCard = ({ dishId, menu }) => {
  const renderDishCard = () => {
    // const dishCard = menu[0];
    const dishCard = menu.find((dish) => dish.id === dishId);

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
