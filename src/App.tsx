import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'

const App: React.FC = () => {
  // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian'

  return (
    <main className="App">
      <Nav />
      {/* <Details /> */}
      <section className="main-container">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
