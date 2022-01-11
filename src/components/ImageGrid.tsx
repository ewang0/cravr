import React from "react";
import Card from "./Card";
import "./ImageGrid.css"
import { SampleDataProps } from './Types'




const ImageGrid: React.FC<SampleDataProps> = ({ recipes }) => {
  const eachRecipe = recipes.map(recipe=> {
    console.log(recipe.id)
    return (
      <Card 
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        />

    )
  })
  return(
    <section className="image-grid-section">
      <aside className="questionnaire-info">
        <img className="bulb-icon" src="fruit.jpg" alt="lightbulb-icon"></img>
        <div className="questionnaire-info-text">
          <h2>Recommendations</h2>
          <p>Your food recommendations will show up here. We’ve generated some random foods to get you started.</p>
        </div>
      </aside>
    <div className="card-container">
      {eachRecipe}
    </div>
    </section>
  )
}

export default ImageGrid;