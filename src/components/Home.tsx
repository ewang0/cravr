import React, { useState, useEffect } from 'react';
import Form from "./Form";
import ImageGrid from "./ImageGrid";
import sampleData from '../sampleData';

const Home: React.FC = () => {

  const [recipes, setRecipes] = useState([]);
  const [typeEndPoint, setTypeEndPoint] = useState('');
  const [cuisineTypeEndPoint, setCuisineTypeEndPoint] = useState('');
  const [dietRestrictionEndPoint, setDietRestrictionEndPoint] = useState('');
  const [intoleranceEndPoint, setIntoleranceEndPoint] = useState('');
  const [errorState, setErrorState] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${cuisineTypeEndPoint}${intoleranceEndPoint}${dietRestrictionEndPoint}${typeEndPoint}&apiKey=${process.env.REACT_APP_API_KEY}`)
      const resJson = await res.json()
      .catch(error => setErrorState(error));
      console.log(resJson)

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

  const randomSearch = (event: any) => {
    event?.preventDefault();
    const fetchData = async() => {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`)
      const resJson = await res.json()
      .catch(error => console.log(error));
      console.log(resJson)
      setRecipes(resJson.recipes)
    }
    fetchData();
  }

  return (
    <>
      <Form submitSearch={submitSearch} randomSearch={randomSearch}/>
      {recipes.length ? <ImageGrid recipes={recipes}/> : <p>No results that match your search. Select different options</p>}
    </>
  )
}

export default Home;