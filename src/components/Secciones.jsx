import React from "react";
import "../styles/Secciones.scss";

const Secciones = () => {
  return (
    <div className="seccions">
      <div className="seccions-individual">
        <div className="seccions-individual-content">
          <p>GAFAS</p>
          <p>Texto de ejemplo para gafas.</p>
        </div>
      </div>
      <div className="seccions-individual">
        <div className="seccions-individual-content">
          <p>LENTILLAS</p>
          <p>Texto de ejemplo para lentillas.</p>
        </div>
      </div>
      <div className="seccions-individual">
        <div className="seccions-individual-content">
          <p>BAJA VISIÓN</p>
          <p>Texto de ejemplo para baja visión.</p>
        </div>
      </div>
      <div className="seccions-individual">
        <div className="seccions-individual-content">
          <p>AUDÍFONOS</p>
          <p>Texto de ejemplo para audífonos.</p>
        </div>
      </div>
    </div>
  );
};

export default Secciones;
