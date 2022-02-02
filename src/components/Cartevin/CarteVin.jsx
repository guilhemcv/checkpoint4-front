/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CarteVin.css';

function CarteVin({ vin }) {
  return (
    <div className="cardvin">
      <Card className="card">
        <Card.Img variant="top" src={vin.image} height="100%" width="100%" />
        <Card.Body>
          <Card.Title>{vin.nom}</Card.Title>
          <Card.Text>
            Millésime : {vin.annee} <br />
            Bouteilles en stock : {vin.nb_bouteilles}
          </Card.Text>
          <Button variant="outline-success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarteVin;
