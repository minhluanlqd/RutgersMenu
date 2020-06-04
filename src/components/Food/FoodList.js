import React from "react";
import { menu } from "../Food/Menu";
import FoodCard from "../Food/FoodCard";

const FoodList = ({food}) =>
  (
    food.map(f =>
     (
      <div >
        <FoodCard
          img={f.img}
          name={f.name}
          info={f.info}
          key={f.key}
        />
      </div>
     )
    )
  )

export default FoodList;
