import React from "react";
import Card from "./Card";
import { SampleDataProps } from './Types'




const ImageGrid: React.FC<SampleDataProps> = ({recipes}) => {
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
      {eachRecipe}
    </section>
  )
}

export default ImageGrid;