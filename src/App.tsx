import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'
import sampleData from './sampleData';

const App: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)
  
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian')
  //     const resJson = await res.json()
  //     setRecipes(resJson.results)
  //   }
  //   fetchData()
  // }, [setRecipes])
  const submitSearch = (event: any, stringArr?: string[]) => {
    event.preventDefault();
    console.log('hello')
  }

  return (
    <main className="App">
      <Nav />
      <section className="main-container">
        <Form submitSearch={submitSearch}/>
        <ImageGrid recipes={recipes} />
      </section>
    </main>
  );
}
export default App;
