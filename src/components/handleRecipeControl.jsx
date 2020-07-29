import React from "react";

export const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div className="recipe-name">
      <h3>{name}</h3>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => {
          return (
            <li key={`ingredient` + i} className="ingredients-ingredient">
              <span> {ingredient.name} /</span>
              <span> {ingredient.amount} </span>
              <span> {ingredient.measuremnet}</span>
            </li>
          );
        })}
      </ul>
      <h3>조리 절차</h3>
      {steps.map((step, i) => {
        return (
          <p key={`step` + i} className="step">
            {step}
          </p>
        );
      })}
    </div>
  );
};

export const Menu = ({ title, recipes }) => {
  return (
    <div className="menu">
      <div className="menu-title">
        <h2>{title}</h2>
      </div>
      <div className="menu-recipes">
        {recipes.map((recipe, i) => {
          return <Recipe key={i} {...recipe}></Recipe>;
        })}
      </div>
    </div>
  );
};
