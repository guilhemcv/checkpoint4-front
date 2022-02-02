import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Formulaire.css';
import axios from 'axios';

function Formulaire() {
  const [addVin, setAddVin] = React.useState({});
  const url = 'http://localhost:3306/vin/ajouter';

  const handleChange = (e) => {
    const valeur = e.target.value;
    setAddVin({
      ...addVin,
      [e.target.name]: valeur,
    });
  };
  console.log(addVin);

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, addVin)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        alert('Nouveau vin sauvegardé !');
      })
      .catch((error) => error);
  };

  /*   function createVin() {
    axios
      .post(url, addVin)
      .then((response) => console.log(response.data));
  } */

  return (
    <div>
      <h2 className="titreForm">Ajouter un nouveau vin :</h2>
      <Form action="" className="ajout">
        <Form.Group className="mb-3" controlId="formBasicNom">
          <Form.Label>Nom du vin</Form.Label>
          <Form.Control
            type="nom"
            name="nom"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNb">
          <Form.Label>Nombre de bouteilles</Form.Label>
          <Form.Control
            type="nb_bouteilles"
            name="nb_bouteilles"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAnnee">
          <Form.Label>Millésime</Form.Label>
          <Form.Control
            type="annee"
            name="annee"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDegree">
          <Form.Label>Degrés</Form.Label>
          <Form.Control
            type="degre"
            name="degre"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicType">
          <Form.Label>Type de vin</Form.Label>
          <Form.Control
            type="type"
            name="id_type_vin"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRegion">
          <Form.Label>Région</Form.Label>
          <Form.Control
            type="region"
            name="id_region"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrix">
          <Form.Label>Prix de la bouteille</Form.Label>
          <Form.Control
            type="prix"
            name="prix"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrix">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button
          className="buttonform"
          type="submit"
          variant="outline-success"
          onClick={(e) => submit(e)}
        >
          Valider
        </Button>
        <Button className="buttonform" type="submit" variant="outline-success">
          <Link className="link" to="/allwine">
            Retour collection
          </Link>
        </Button>
        <Button className="buttonform" type="submit" variant="outline-success">
          <Link className="link" to="/">
            Retour accueil
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default Formulaire;
