import React from "react";
import "../styles/ImageGallery.scss";
import Post2 from "../assets/silla.jpeg";

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div>
        <h2 className="image-gallery-title">Nuestros Especialistas</h2>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <img src={Post2} alt="Card" />
          </div>
          <div className="card-text">
            <h3 className="card-title">Título de la Carta 1</h3>
            <p>Descripción de la Carta 1</p>
          </div>
        </div>
        <div className="card-content">
          <div className="card-image">
            <img src={Post2} alt="Card" />
          </div>
          <div className="card-text">
            <h3 className="card-title">Título de la Carta 1</h3>
            <p>Descripción de la Carta 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
