import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import './App.css';
import Affichage from './components/Affichage/Affichage';
import Formulaire from './components/Formulaire/Formulaire';
import FormulaireModif from './components/FormulaireModif/FormulaireModif';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/allwine" element={<Affichage />} />
        <Route exact path="/addwine" element={<Formulaire />} />
        <Route path="/onewine/:id" element={<FormulaireModif />} />
      </Routes>
    </div>
  );
}

export default App;
