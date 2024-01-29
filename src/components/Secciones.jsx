import React from "react";
// import lentillas from "../assets/lentillas.png";
// import gafas from "../assets/gafas.png";
// import audifonos from "../assets/audifonos.png";
// import gafas1 from "../assets/gafas1.png";
// import bajaVision from "../assets/bajaVision.png";
import "../styles/Secciones.scss";

const Secciones = () => {
  return (
    <div className="seccions">
      <div className="seccions-individual">
        {/* <img src={lentillas} alt="profile" className="sameSeccion"></img> */}
        <p>LENTILLAS</p>
        <p>texto</p>
      </div>
      <div className="seccions-individual">
        {/* <img src={gafas} alt="profile" className="sameSeccion"></img> */}
        <p>GAFAS</p>
        <p>texto</p>
      </div>
      <div className="seccions-individual">
        {/* <img src={gafas1} alt="profile" className="sameSeccion"></img> */}
        <p>GAFAS DE SOL</p>
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
