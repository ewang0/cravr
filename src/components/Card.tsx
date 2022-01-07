import React from "react";
import './Card.css';
import { Recipe } from './Types'

const Card: React.FC<Recipe> =(recipe) => {
  return(
    <div className="card">
      <p>{recipe.image}</p>
      <p>{recipe.title}</p>
      <p></p>

    </div>
  )
}

export default Card;