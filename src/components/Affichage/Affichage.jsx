/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CarteVin from '../Cartevin/CarteVin';
import './Affichage.css';

function Affichage() {
  const [vins, setVins] = useState([]);
  const [filteredWine, setFilteredWine] = useState([]);
  const [checkbox, setCheckbox] = useState([
    { color: 'Rouge', checked: false },
    { color: 'Mousseux', checked: false },
    { color: 'Blanc', checked: false },
    { color: 'Rosé', checked: false },
    { color: 'Liquoreux', checked: false },
  ]);

  useEffect(() => {
    axios.get('https://checkpoint4.herokuapp.com/vin').then((response) => {
      setVins(response.data);
      setFilteredWine(response.data);
    });
  }, []);

  useEffect(() => {
    const newWine = [];
    checkbox.forEach((check) => {
      if (check.checked) {
        const provWine = vins.filter((vin) => vin.couleur_vin === check.color);
        newWine.push(...provWine);
      }
    });
    if (newWine.length > 0) setFilteredWine(newWine);
    else setFilteredWine(vins);
  }, [checkbox]);

  /**
   *Fonction pour filtrer sur les checkbox
   *
   * @return {array}
   */
  const handleCheckbox = (index) => {
    const newCheckbox = [...checkbox];
    newCheckbox[index].checked = !newCheckbox[index].checked;
    setCheckbox(newCheckbox);
  };

  return (
    <div>
      <div className="buttonaffichage">
        <Button className=" marg" type="submit" variant="outline-success">
          <Link className="link" to="/">
            Retour accueil
          </Link>
        </Button>
        <Button className=" marg" type="submit" variant="outline-success">
          <Link className="link" to="/addwine">
            Ajouter un vin
          </Link>
        </Button>
      </div>
      <h6 style={{ margin: 'auto', textAlign: 'center' }}>
        Classer par type de vin :
      </h6>
      {checkbox.map((vin, index) => (
        <div key={checkbox.color} className="filtre-couleur">
          <input
            type="checkbox"
            id={checkbox.color}
            name={checkbox.color}
            checked={checkbox.checked}
            onChange={() => handleCheckbox(index)}
          />
          <label htmlFor="couleur">{vin.color}</label>
        </div>
      ))}
      <div className="cartevin">
        <CarteVin vins={filteredWine} />
      </div>
    </div>
  );
}

export default Affichage;
