import React from "react";

const SpecialsCard = ({ dishId, menu }) => {
  const specialsCard = menu.find((dish) => dish.id === dishId);

  return (
    <>
      <article className="d-flex flex-column">
        <img src={specialsCard["dish-image"]} alt="dish-image" />
        <div className="d-flex flex-column">
          <div className="d-flex ">
            <p>{specialsCard["dish-name"]}</p>
            <p>$ {specialsCard["dish-price"]}</p>
          </div>
          <div>
            <p>{specialsCard["dish-details"]}</p>
          </div>
        </div>
        <div>
          <button>Order a Delivery</button>
        </div>
      </article>
    </>
  );
};

export default SpecialsCard;
