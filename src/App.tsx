import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'

const App: React.FC = () => {

  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian')
      const resJson = await res.json()
      setRecipes(resJson)
    }
    fetchData()
  }, [setRecipes])

  console.log('recipes', recipes )

  
  return (
    //when we access data, we need recipes.results
    //this gives us an array of objects 
    //{ id: numbers, image, imageType, title :rest are strings}
    <main className="App">
      <Nav />
      <section className="main-container">
        <Form />
        <ImageGrid />
      </section>
    </main>
  );
}

export default App;
