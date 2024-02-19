import React from "react";
import "../styles/Secciones.scss";

const Secciones = () => {
  return (
    <div className="seccions">
      <div className="seccions-individual">
        {/* <img src={lentillas} alt="profile" className="sameSeccion"></img> */}
        <p>GAFAS</p>
        <p>texto</p>
      </div>
      <div className="seccions-individual">
        {/* <img src={gafas} alt="profile" className="sameSeccion"></img> */}
        <p>LENTILLAS</p>
        <p>texto</p>
      </div>

      <div className="seccions-individual">
        {/* <img src={bajaVision} alt="profile" className="sameSeccion"></img> */}
        <p>BAJA VISIÓN</p>
        <p>texto</p>
      </div>
      <div className="seccions-individual">
        {/* <img src={audifonos} alt="profile" className="sameSeccion"></img> */}
        <p>AUDIFONOS</p>
        <p>texto</p>
      </div>
    </div>
  );
};

export default Secciones;
