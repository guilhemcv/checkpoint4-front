import React from 'react';
import BoutonAccueil from '../BoutonAccueil/BoutonAccueil';
/* import Caroussel from '../Caroussel/Caroussel';
 */ import './Accueil.css';
import databouton from '../../data/databouton';

function Accueil() {
  return (
    <div className="accueil">
      <div className="bandeau">
        <h1 className="accueiltitre">Bienvenue sur Vino Perso</h1>
      </div>
      <p className="pres">
        Bienvenue sur votre cave en ligne personnelle.
        <br />
        Ici vous pourrez
        consulter vos vins, en ajouter, les modifier et les supprimer.
      </p>
      {/* <Caroussel /> */}
      <div className="bout">
        {databouton.map((data) => (
          <BoutonAccueil data={data} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
