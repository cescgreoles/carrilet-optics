import React from "react";
import "../styles/QuienSomos-1.scss";
import Post1 from "../assets/qs-portada.jpeg";

const QuienSomos = () => {
  return (
    <div className="quienes-somos">
      <div className="quienSomos">
        <div className="quien-somos-enter">
          <h2>¿Quiénes somos?</h2>
          <p className="justify-content">
            Óptica Carrilet fue fundada en 1996 y desde entonces, nuestro equipo
            de profesionales graduados en Óptica y Optometría están dedicados al
            cuidado de la salud visual y auditiva de nuestros pacientes. Somos
            la 4ª generación de ópticos y optometristas al frente de diversas
            opticas y centros sanitarios situados en diferentes puntos de la
            geografia española.
          </p>
        </div>
        {/* <img src={Post1} alt="imagen" className="image-portada"></img> */}
      </div>
    </div>
  );
};

export default QuienSomos;
