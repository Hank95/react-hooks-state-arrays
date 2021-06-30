import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodToDisplay.map((food) => {
    return (
      <li key={food.id} onClick={() => handleClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
    );
  });

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodsArray = [...foods, newFood];
    setFoods(newFoodsArray);
  }

  function handleClick(id) {
    const newFoodsArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodsArray);
  }

  function handleChange(event) {
    setFilterBy(event.target.value);
  }

  return (
    <div>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
