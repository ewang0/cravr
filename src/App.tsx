import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'
import sampleData from './sampleData';

const App: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)

  
  // useEffect(() => {
  //   setRecipes(sampleData)
  //   // const fetchData = async() => {
  //   //   const res = await fetch(url)
  //   //   const resJson = await res.json()
  //   //   setRecipes(resJson)
  //   // }
  //   // fetchData()
  // }, [setRecipes])



  // console.log('recipes', recipes )

  
  return (
    <main className="App">
      <Nav />
      <section className="main-container">
        <Form />
        <ImageGrid recipes={recipes} />
      </section>
    </main>
  );
}

export default App;
