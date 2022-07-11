import React from "react";
import "./RecipeTile.css";
export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/|.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        {" "}
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
        ></img>
        <div className="flex__container">
          <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
          <a className="view__button" href={recipe["recipe"]["url"]}>
            View Recipe
          </a>
        </div>
        <p className="item__data">
          Calories: {recipe["recipe"]["calories"].toFixed(0)}{" "}
        </p>
      </div>
    )
  );
}
