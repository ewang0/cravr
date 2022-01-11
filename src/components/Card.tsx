import React from "react";
import './Card.css';
import { Recipe } from './Types'
import { Link } from "react-router-dom";

const Card: React.FC<Recipe> =({ id, title, image }) => {
  return(
    <div className="card">
      <img className="food-img" src={image} alt="Food IMG"></img>
      <div className="card-text">
        <p>{title}</p>
        <Link to={`/details/${id}`} className="see-details">See Details<img src="arrow.svg" alt="Forward Arrow"></img></Link>
      </div>
    </div>
  )
}

export default Card;