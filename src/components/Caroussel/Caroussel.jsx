import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Caroussel.css';

function Caroussel() {
  return (
    <div>
      <Carousel className="carou">
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://www.covigneron.com/wp-content/uploads/2019/01/blanc-rouge-vin.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3 className="titrecarou">Bibliothèque</h3>
            <p className="descricarou">
              Retrouvez toute votre collection de vins
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://data2.1freewallpapers.com/download/wine-pomegranate-cheese-960x600.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="titrecarou">Filtres</h3>
            <p className="descricarou">Classez les résultats par catégories, type de vin, région...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://data2.1freewallpapers.com/download/bottle-wine-glasses-champagne-960x600.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="titrecarou">Ajout / Modification</h3>
            <p className="descricarou">
              Ajoutez une bouteille ou modifiez une existante en fonction de vos
              achats
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://data.1freewallpapers.com/detail/wine-rose-free.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="titrecarou">Suppression</h3>
            <p className="descricarou">Une fois consommées, supprimez les bouteilles hors stock</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caroussel;
