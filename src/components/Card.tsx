import React from "react";
import './Card.css';

const Card = () => {
  return(
    <div className="card">
      <img src={recipe.image}></img>
      <p>{recipe.title}</p>
    </div>
  )
}

export default Card;