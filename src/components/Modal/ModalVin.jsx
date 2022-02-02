/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalVin(props) {
  const { vins, index } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {vins[index].nom}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          textAlign: 'justify',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={vins[index].image}
          alt="etiquette vin"
          width="50%"
          margin="50px auto"
        />
        <h5>Millesime : {vins[index].annee}</h5>
        <h6>Degrés : {vins[index].degre}°</h6>
        <h6>Bouteilles en stock : {vins[index].nb_bouteilles}</h6>
        <p>{vins[index].description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={props.onHide}>
          Retour a la collection
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalVin;
