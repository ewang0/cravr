import React from "react";
import './Card.css';
import { Recipe } from './Types'

const Card: React.FC<Recipe> =(recipe) => {
  return(
    <div className="card">
      <img src={recipe.image}></img>
      <p>{recipe.title}</p>
    </div>
  )
}

export default Card;