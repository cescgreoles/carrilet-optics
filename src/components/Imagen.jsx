import React from "react";
import Portada from "../assets/logo-1.png";

import "../styles/Imagen.scss";

const Imagen = () => {
  return (
    <div className="div-imagen">
      <img src={Portada} alt="portada" className="div-imagen-img"></img>
    </div>
  );
};

export default Imagen;
