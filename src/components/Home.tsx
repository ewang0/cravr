import React, { useState, useEffect } from 'react';
import Form from "./Form";
import ImageGrid from "./ImageGrid";
import sampleData from '../sampleData';

const Home: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)
  const [typeEndPoint, setTypeEndPoint] = useState('');
  const [cuisineTypeEndPoint, setCuisineTypeEndPoint] = useState('');
  const [dietRestrictionEndPoint, setDietRestrictionEndPoint] = useState('');
  const [intoleranceEndPoint, setIntoleranceEndPoint] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${cuisineTypeEndPoint}${intoleranceEndPoint}${dietRestrictionEndPoint}${typeEndPoint}&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7`)
      const resJson = await res.json()
      .catch(error => console.log(error));
      // !resJson.length ? 
      setRecipes(resJson.results)
    }
    fetchData();
  }, [typeEndPoint, cuisineTypeEndPoint, dietRestrictionEndPoint, intoleranceEndPoint]);

  const submitSearch = (event: any, type?: string, cuisineTypes?: string[], dietRestrictions?: string[], intolerances?: string[]) => {
    event.preventDefault();
    if (cuisineTypes) {
      setCuisineTypeEndPoint(`cuisine=${cuisineTypes.join(",")}`)
    }
    if (dietRestrictions) {
      setDietRestrictionEndPoint(`&diet=${dietRestrictions.join(",")}`)
    }
    if (intolerances) {
      setIntoleranceEndPoint(`&intolerances=${intolerances.join(",")}`)
    }
    setTypeEndPoint(`&type=${type}`);
  }

  return (
    <>
      <Form submitSearch={submitSearch}/>
      <ImageGrid recipes={recipes}/>
    </>
  )
}

export default Home;