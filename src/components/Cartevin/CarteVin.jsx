/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from '../Modal/ModalVin';
import './CarteVin.css';

function CarteVin({ vins }) {
  const [modalShow, setModalShow] = useState([]);

  /**
   * Fonction qui permet d'ouvrir le modal au clique sur le bouton detail
   *
   * @returns {true}
   */
  const onHideModal = () => {
    const hideModal = modalShow.map((res) => false);
    setModalShow(hideModal);
  };

  /**
   * Fonction qui permet d'ouvrir le modal au clique sur le bouton detail
   *
   * @returns {false}
   */
  const onShowModal = (index) => {
    const newModalShow = [...modalShow];
    newModalShow[index] = true;
    setModalShow(newModalShow);
  };

  useEffect(() => {
    const modal = new Array(vins.length).fill().map((res) => false);
    setModalShow(modal);
  }, [vins]);

  return (
    <div className="globalvin">
      {vins.map((vin, index) => (
        <div className="cardvin">
          <Card className="card">
            <Card.Img
              variant="top"
              src={vin.image}
              height="100%"
              width="100%"
              key={vin.id}
            />
            <Card.Body>
              <Card.Title>{vin.nom}</Card.Title>
              <Card.Text>
                Millésime : {vin.annee} <br />
                Bouteilles en stock : {vin.nb_bouteilles}
              </Card.Text>
              <Button
                variant="outline-success"
                onClick={() => onShowModal(index)}
              >
                Go somewhere
              </Button>
            </Card.Body>
            <Modal
              show={modalShow[index]}
              vins={vins}
              onHide={() => onHideModal()}
              index={index}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CarteVin;
