import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Formulaire.css';
import axios from 'axios';

function Formulaire() {
  const [addVin, setAddVin] = React.useState({});
  const url = 'http://localhost:3306/vin/ajouter';
  const navigate = useNavigate();
  /**
   *Fonction qui actualise l'objet pour poster une nouvelle entrée
   *
   * @return {Object}
   */
  const handleChange = (e) => {
    const valeur = e.target.value;
    setAddVin({
      ...addVin,
      [e.target.name]: valeur,
    });
  };
  /**
   * Fonction qui envoie le vin dans la BDD
   *
   * @return {*}
   */
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, addVin)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        alert('Nouveau vin sauvegardé !');
        navigate('/allwine');
      })
      .catch((error) => error);
  };

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
        <div className="drop">
          <div>
            <Form.Label>Type de vin</Form.Label>
            <select
              defaultValue="Choisir"
              type="type"
              name="id_type_vin"
              onChange={(e) => handleChange(e)}
              style={{
                marginLeft: '20px',
                width: '100px',
                height: '40px',
                background: 'white',
                border: 'solid 1px #1A8754',
                borderRadius: '5px',
                color: '#1A8754',
              }}
            >
              <option>Choisir</option>
              <option value="1">Rouge</option>
              <option value="2">Blanc</option>
              <option value="3">Rosé</option>
              <option value="4">Liquoreux</option>
              <option value="5">Mousseux</option>
            </select>
          </div>
          <div>
            <Form.Label>Région</Form.Label>
            <select
              defaultValue="Choisir"
              type="type"
              name="id_region"
              onChange={(e) => handleChange(e)}
              style={{
                marginLeft: '20px',
                marginTop: '20px',
                width: '100px',
                height: '40px',
                background: 'white',
                border: 'solid 1px #1A8754',
                borderRadius: '5px',
                color: '#1A8754',
              }}
            >
              <option>Choisir</option>
              <option value="1">Loire</option>
              <option value="2">Champagne</option>
              <option value="3">Chablis</option>
              <option value="4">Alsace</option>
              <option value="5">Bourgogne</option>
              <option value="6">Jura</option>
              <option value="7">Savoie</option>
              <option value="8">Beaujolais</option>
              <option value="9">Bordeaux</option>
              <option value="10">Rhone</option>
              <option value="11">Sud Ouest</option>
              <option value="12">Languedoc Roussillon</option>
              <option value="13">Provence</option>
              <option value="14">Corse</option>
            </select>
          </div>
        </div>
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
