import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'
import sampleData from './sampleData';
import Details from './components/Details'

const App: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)
  const [typeEndPoint, setTypeEndPoint] = useState('');
  const [cuisineTypeEndPoint, setCuisineTypeEndPoint] = useState('');
  const [dietRestrictionEndPoint, setDietRestrictionEndPoint] = useState('');
  const [intoleranceEndPoint, setIntoleranceEndPoint] = useState('');
  // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian'
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
    console.log('hello');
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
    <main className="App">
      <Nav />
      <Details />
      {/* <section className="main-container">
        <Form submitSearch={submitSearch}/>
        <ImageGrid recipes={recipes} />
      </section> */}
    </main>
  );
}
export default App;
