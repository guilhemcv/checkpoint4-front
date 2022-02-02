import React from 'react';
import BoutonAccueil from '../BoutonAccueil/BoutonAccueil';
import Caroussel from '../Caroussel/Caroussel';
import './Accueil.css';
import databouton from '../../data/databouton';

function Accueil() {
  return (
    <div className="accueil">
      <div className="bandeau">
        <h1 className="accueiltitre">Bienvenue sur Wildo Vino</h1>
      </div>
      <Caroussel />
      <div className="bout">
        {databouton.map((data) => (
          <BoutonAccueil data={data} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
