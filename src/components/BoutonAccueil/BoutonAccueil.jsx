import React from 'react';
import './BoutonAccueil.css';

function BoutonAccueil(props) {
  const { data } = props;
  return (
    <div className="bouton">
      <h2 className="titrebouton">{data.titre}</h2>
      <img src={data.logo} alt="loupe" className="logobouton" />
      <p className="describouton">{data.description}</p>
    </div>
  );
}

export default BoutonAccueil;
