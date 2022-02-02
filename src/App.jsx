import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import './App.css';
import Affichage from './components/Affichage/Affichage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/allwine" element={<Affichage />} />
      </Routes>
    </div>
  );
}

export default App;
