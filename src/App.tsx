import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'

const App: React.FC = () => {
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
