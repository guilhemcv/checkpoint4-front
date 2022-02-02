import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    <div className="cartevin">
      {vins.map((vin) => (
        <CarteVin vin={vin} />
      ))}
    </div>
  );
}

export default Affichage;
