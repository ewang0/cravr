import React, { useState, useEffect } from "react";
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import { DetailsProps } from "./Types";

const Details: React.FC = () => {

  const id = useParams<string>().id;
  const [details, setDetails] = useState<DetailsProps>();

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7`)
      const resJson = await res.json()
      .catch(error => console.log(error));
      setDetails(resJson);
    }
    fetchData();
  }, [id]);

  const dietTags = details?.diets.map(diet => {
    return (
      <p>{diet}</p>
    )
  })

  const dishTags = details?.dishTypes.map(dish => {
    return (
      <p>{dish}</p>
    )
  })

  const cuisineTags = details?.cuisines.map(cuisine => {
    return (
      <p>{cuisine}</p>
    )
  })
  
  const summaryArr = details?.summary.split('. ');
  summaryArr?.splice(summaryArr.length - 3, 3);
  const summary = summaryArr?.join('. ')

  return (
    <section className="recipe-details">
      <Link to="/">back</Link>
      <div className="recipe-details-content">
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
          <div>
            <h2>Link to Recipe</h2>
            <p>https://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html</p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Details;