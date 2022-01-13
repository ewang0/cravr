import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Details from './components/Details';
import About from './components/About'

const App: React.FC = () => {

  return (
    <main className="App">
      <Nav />
      <section className="main-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/details" element={<Details />}>
            <Route path="/details/:id" element={<Details />}/>
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default App;
