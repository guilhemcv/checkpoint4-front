import React from 'react';
import { Link } from 'react-router-dom';
import './BoutonAccueil.css';

function BoutonAccueil(props) {
  const { data } = props;
  return (
    <Link className="linkmap" to={data.link}>
      <div className="bouton">
        <h2 className="titrebouton">{data.titre}</h2>
        <img src={data.logo} alt="loupe" className="logobouton" />
      </div>
    </Link>
  );
}

export default BoutonAccueil;
