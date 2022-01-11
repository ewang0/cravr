import React from "react";
import './Details.css'
import { Link } from 'react-router-dom'

const Details: React.FC = () => {

  return (
    <section className="recipe-details">
      
      <div className="recipe-details-content">
        <Link className="back-button" to="/"><img className="left-arrow-icon" src="arrow.svg"></img>Back</Link>
        <div className="content-left">
          <div className="image-description">
            {/* <img></img> */}
            <div className="placeholder-img"></div>
            <h2>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h2>
            <div className="tags">
              <article>Main Course</article>
              <article>Italian</article>
              <article>Vegetarian</article>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="content-right">
          <div>
            <h2>Description</h2>
            <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>.</p>
          </div>
          <a href=""><button className="view-recipe-button">View Recipe</button></a>
        </div>
      </div>
    </section>
  )

}

export default Details;