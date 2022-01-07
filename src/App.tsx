import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'

const App: React.FC = () => {

  // const [recipes, setRecipes] = useState([])
  
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian')
  //     const resJson = await res.json()
  //     setRecipes(resJson)
  //   }
  //   fetchData()
  // }, [setRecipes])

  console.log('recipes', recipes )

  return (
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
