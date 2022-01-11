import React from "react";
import './Card.css';
import Details from "./Details";
import { Recipe } from './Types'
import { Routes, Route, NavLink } from "react-router-dom";

const Card: React.FC<Recipe> =({ id, title, image }) => {
  return(
    <div className="card">
      <img className="food-img" src={image} alt="Food IMG"></img>
      <div className="card-text">
        <p>{title}</p>
        <NavLink to={`/details/${id}`} className="see-details">See Details</NavLink>
        {/* <Routes >
          <Route path="/details" element={<Details />}/>
        </Routes> */}
        {/* <a className="see-details"href="">See details<img src="arrow.svg" alt="Forward Arrow"></img></a> */}
      </div>
    </div>
  )
}

export default Card;