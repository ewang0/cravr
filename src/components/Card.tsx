import React from "react";
import './Card.css';
import { Recipe } from './Types'

const Card: React.FC<Recipe> =(recipe) => {
  return(
    <div className="card">
      <img className="food-img"src={recipe.image}></img>
      <div className="card-text">
        <p>{recipe.title}</p>
        <a className="see-details"href="">See details<img src="arrow.svg"></img></a>
      </div>
    </div>
  )
}

export default Card;