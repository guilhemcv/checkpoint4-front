import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
