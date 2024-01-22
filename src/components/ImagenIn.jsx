import React from "react";
import Imagen from "../assets/opticaLogo.png";
import "../styles/ImagenIn.scss";

const ImagenIn = () => {
  return (
    <div className="container">
      <img src={Imagen} alt="imagen" className="full-width-image"></img>
    </div>
  );
};

export default ImagenIn;
