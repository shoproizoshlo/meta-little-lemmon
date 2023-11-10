import axios from "axios";

import { useState } from "react";
import React from "react";
import Testimonial from "./Testimonial";

export default function CustomersSay() {
  const [testimoId, setDishId] = useState();
  const [testimo, setMenu] = useState([]);
  axios
    .get(`https://little-lemon-restaurant-database.onrender.com/testimonials`)
    .then((response) => {
      setMenu(response.data);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <article>
        <section>
          <div>
            <h2>This week specials</h2>
            <div className="d-flex">
              {testimo.map((testimoItem) => {
                {
                  return (
                    <Testimonial
                      testimo={testimo}
                      key={testimoItem["name"]}
                      testimoId={testimoItem["id"]}
                      setDishId={setDishId}
                    />
                  );
                }
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
