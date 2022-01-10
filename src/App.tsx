import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'
import sampleData from './sampleData';
import Details from './components/Details'

const App: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)
  const [endPoint, setEndPoint] = useState('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian');
  // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian'
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch(endPoint)
  //     const resJson = await res.json()
  //     console.log("this is the response>>", resJson.results)
  //     setRecipes(resJson.results)
  //   }
  //   fetchData();
  // }, [endPoint]);

  const submitSearch = (event: any, type?: string, cuisineTypes?: string[], dietRestrictions?: string[], intolerances?: string[]) => {
    event.preventDefault();
    console.log('hello')
    setEndPoint(`https://api.spoonacular.com/recipes/complexSearch?${cuisineTypes ? `type=${cuisineTypes.join(",")}` : ''}&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7`);
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
