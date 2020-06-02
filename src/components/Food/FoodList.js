import React from 'react';
import {menu} from '../Food/Menu'
import FoodCard from '../Food/FoodCard'

const FoodList = () => menu.map((food, index) => {
    return <FoodCard
        img={food.img}
        name={food.name}
        info={food.info}
        key={food.id}
    />
})

export default FoodList;

