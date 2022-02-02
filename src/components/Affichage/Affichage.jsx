import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CarteVin from '../Cartevin/CarteVin';
import './Affichage.css';

function Affichage() {
  const [vins, setVins] = useState([]);

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_PORT}/vin`).then((response) => {
      console.log(response.data);
      setVins(response.data);
    });
  }, []);

  return (
    <div>
      <Button className="buttonform marg" type="submit" variant="outline-success">
        <Link className="link" to="/">
          Retour accueil
        </Link>
      </Button>
      <div className="cartevin">
        <CarteVin vins={vins} />
      </div>
    </div>
  );
}

export default Affichage;
