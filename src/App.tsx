import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';

const App = () => {
  return (
    <main className="App">
      <h1>Cravr</h1>
      <Form />
      <ImageGrid />
    </main>
  );
}

export default App;
