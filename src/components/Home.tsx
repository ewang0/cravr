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
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${cuisineTypeEndPoint}${intoleranceEndPoint}${dietRestrictionEndPoint}${typeEndPoint}&apiKey=b4cbcd2b1598415891d142caedb69ce6`)
      const resJson = await res.json()
      .catch(error => console.log(error));
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
          const res = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=dde7a1678dfc4f46b6d031e5944114cf')
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
      <ImageGrid recipes={recipes}/>
    </>
  )
}

export default Home;