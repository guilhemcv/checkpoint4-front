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
            <h3>Bibliothèque</h3>
            <p>Retrouvez toute votre collection de vins</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://data2.1freewallpapers.com/download/wine-pomegranate-cheese-960x600.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3>Filtres</h3>
            <p>Classez les résultats par catégories, type de vin, région...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgcarou"
            src="https://data2.1freewallpapers.com/download/bottle-wine-glasses-champagne-960x600.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>Ajout / Modification</h3>
            <p>
              Ajoutez une bouteille ou modifiez une existante en fonction de vos achats
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
            <h3>Suppression</h3>
            <p>
              Une fois consommées, supprimez les bouteilles hors stock
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caroussel;
