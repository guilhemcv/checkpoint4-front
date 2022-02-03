/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function ModalVin(props) {
  const { vins, index } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/allwine');
  };

  const deleteWine = () => {
    axios
      .delete(`http://${process.env.REACT_APP_PORT}/vin/${vins[index].id}`)
      .then(() => alert('Vin supprimé'));
    setShow(false);
    window.location.reload(false);
  };

  return (
    <div>
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
          <div style={{ width: '100%', margin: '50px auto' }}>
            <h6>Type de vin : {vins[index].couleur_vin}</h6>
            <h6>Région : {vins[index].nom_region}</h6>
            <h6>Millesime : {vins[index].annee}</h6>
            <h6>Degrés : {vins[index].degre}°</h6>
            <h6>Bouteilles en stock : {vins[index].nb_bouteilles}</h6>
            <h6>Prix de la bouteille : {vins[index].prix} euros</h6>
            <h6>
              Valeur en cave: {vins[index].prix * vins[index].nb_bouteilles}{' '}
              euros
            </h6>
          </div>
          <p>{vins[index].description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={props.onHide}>
            Retour a la collection
          </Button>
          <Button variant="outline-warning" onClick={props.onHide}>
            <Link className="link2" to={`/onewine/${vins[index].id}`}>
              Modifier entrée
            </Link>
          </Button>
          <div onClick={props.onHide}>
            <Button
              onHide={handleClose}
              variant="outline-danger"
              onClick={handleShow}
            >
              Supprimer cette entrée
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🚨 Attention 🚨</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sur de vouloir supprimer cette entrée ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Annuler
          </Button>
          <Button onHide={goBack} variant="danger" onClick={() => deleteWine()}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalVin;
