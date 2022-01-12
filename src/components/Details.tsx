import React, { useState, useEffect } from "react";
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import { DetailsProps } from "./Types";

const Details: React.FC = () => {

  const id = useParams<string>().id;
  const [details, setDetails] = useState<DetailsProps>();

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=dde7a1678dfc4f46b6d031e5944114cf`)
      const resJson = await res.json()
      .catch(error => console.log(error));
      setDetails(resJson);
    }
    fetchData();
  }, [id]);

  const dietTags = details?.diets.map(diet => {
    return (
      <p key={diet}>
        {diet}
      </p>
    )
  })

  const dishTags = details?.dishTypes.map(dish => {
    return (
      <p key={dish}>
        {dish}
      </p>
    )
  })

  const cuisineTags = details?.cuisines.map(cuisine => {
    return (
      <p key={cuisine}>
        {cuisine}
      </p>
    )
  })
  
  const summaryArr = details?.summary.split('. ');
  summaryArr?.splice(summaryArr.length - 3, 3);
  const summary = summaryArr?.join('. ')

  return (
    <section className="recipe-details">
      
      <div className="recipe-details-content">
        <Link className="back-button" to="/"><img className="left-arrow-icon" src="arrow.svg"></img>Back</Link>
        <div className="content-left">
          <div className="image-description">
            <div className="placeholder-img">
              <img src={details?.image} alt='Food img'></img>
            </div>
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
          <div>
            <h2>Description</h2>
            <p dangerouslySetInnerHTML={{__html: `${summary}.`!}}></p>
          </div>
          <a href={details?.spoonacularSourceUrl} target="_blank"><button className="view-recipe-button">View Recipe</button></a>
        </div>
      </div>
    </section>
  )

}

export default Details;