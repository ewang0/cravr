import React, { useState, useEffect } from "react";
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import { DetailsProps } from "./Types";

const Details: React.FC = () => {

  const id = useParams<string>().id;
  const [details, setDetails] = useState<DetailsProps>();

  useEffect(() => {
    const fetchData = async() => {

      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.REACT_APP_API_KEY}`)

      const resJson = await res.json()
      .catch(error => console.log(error));
      setDetails(resJson);
    }
    fetchData();
  }, [id]);

  const dietTags = details?.diets.map(diet => {
    return (
      <article key={diet}>
        {diet}
      </article>
    )
  })

  const dishTags = details?.dishTypes.map(dish => {
    return (
      <article key={dish}>
        {dish}
      </article>
    )
  })

  const cuisineTags = details?.cuisines.map(cuisine => {
    return (
      <article key={cuisine}>
        {cuisine}
      </article>
    )
  })
  
  const summaryArr = details?.summary.split('. ');
  summaryArr?.splice(summaryArr.length - 3, 3);
  const summary = summaryArr?.join('. ');

  return (
    <section className="details-section">
      <div className="recipe-details-content">
        <Link className="back-button" to="/"><img className="left-arrow-icon" src="../arrow.svg"></img>Back</Link>
        <div className="content-left">
          <div className="image-description">
            <img src={details?.image} alt='Food img' className="food-image"></img>
            <h2>{details?.title}</h2>
            <div className="tags">
              {dietTags}
              {dishTags}
              {cuisineTags}
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="content-right">
          <div className="detail-description-container">
            <h2>Description</h2>
            <p dangerouslySetInnerHTML={{__html: `${summary}.`!}}></p>
          </div>
          <a href={details?.spoonacularSourceUrl} target="_blank" rel="noreferrer"><button className="view-recipe-button">View Recipe</button></a>
        </div>
      </div>
    </section>
  )
}

export default Details;