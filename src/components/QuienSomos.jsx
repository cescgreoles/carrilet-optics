import React from "react";
import "../styles/QuienSomos.scss";
import QuienSomos1 from "../assets/Quiensomos.webp";
import Profile from "../assets/profile.jpeg";

const QuienSomos = () => {
  return (
    <div className="quienSomos">
      <img src={QuienSomos1} alt="quienSomos" className="fotoQuien"></img>
      <div>
        <h3>QUIÉN SOMOS?</h3>
        <img src={Profile} alt="profile" className="profile"></img>
      </div>

      <p className="textArea">
        Óptica Carrilet fue fundada en 1996 y desde entonces, nuestro equipo de
        profesionales graduados en Óptica y Optometría están dedicados al
        cuidado de la salud visual y auditiva de nuestros pacientes. Somos la 4ª
        generación de ópticos y optometristas al frente de diversas opticas y
        centros sanitarios situados en diferentes puntos de la geografia
        española.
      </p>
    </div>
  );
};

export default QuienSomos;
