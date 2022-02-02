import React from 'react';
import Caroussel from '../Caroussel/Caroussel';
import './Accueil.css';

function Accueil() {
  return (
    <div>
      <div className="bandeau">
        <h1 className="accueiltitre">Bienvenue sur Wildo Vino</h1>
      </div>
      <Caroussel />
    </div>
  );
}

export default Accueil;
