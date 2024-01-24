import React from "react";
import "../styles/ImageGallery.scss";
import Post2 from "../assets/silla.jpeg";
import Post3 from "../assets/vista-optica.jpeg";
import Post4 from "../assets/productos.jpeg";

const ImageGallery = () => {
  return (
    <div className="img-gallery-1">
      <h2 className="h2-gallery">Nuestros Especialistas</h2>
      <div className="img-container">
        <img src={Post2} alt="Imagen 2" className="img-post" />
        <p>Descripción de la Imagen 2</p>

        <img src={Post3} alt="Imagen 3" className="img-post" />
        <p>Descripción de la Imagen 3</p>
      </div>

      <div className="img-container">
        <img src={Post4} alt="Imagen 3" className="img-post" />
        <p>Descripción de la Imagen 3</p>
        <img src={Post4} alt="Imagen 3" className="img-post" />
        <p>Descripción de la Imagen 3</p>
      </div>
    </div>
  );
};

export default ImageGallery;
