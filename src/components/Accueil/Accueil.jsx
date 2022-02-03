/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import axios from 'axios';
import BoutonAccueil from '../BoutonAccueil/BoutonAccueil';
/* import Caroussel from '../Caroussel/Caroussel';
 */ import './Accueil.css';
import databouton from '../../data/databouton';

function Accueil() {
  const [somme, setSomme] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:3306/vin/calculbouteille')
      .then((res) => setSomme(res.data));
    axios
      .get('http://localhost:3306/vin/calculprix')
      .then((res) => setPrice(res.data));
  }, []);

  return (
    <div className="accueil">
      <div className="bandeau">
        <h1 className="accueiltitre">Bienvenue sur Vino Perso</h1>
      </div>
      <p className="pres">
        Bienvenue sur votre cave en ligne personnelle.
        <br />
        Ici vous pourrez consulter vos vins, en ajouter, les modifier et les
        supprimer.
      </p>
      <p className="pres2">
        Votre cave compte actuellement :{' '}
        {somme === null ? '' : somme[0].somme_bouteille} bouteilles.
      </p>
      <p className="pres2">
        Valeur de vos bouteilles :{' '}
        {price === null ? '' : Math.trunc(price[0].somme_prix)} euros.{' '}
      </p>

      <div className="bout">
        {databouton.map((data) => (
          <BoutonAccueil data={data} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
