import React from "react";
import "../styles/Combination.scss";
import logoPrada from "../assets/logoPrada.webp";
import EA from "../assets/emporioArmani.webp";
import CH from "../assets/CH.webp";
import logoTous from "../assets/logoTous.webp";
import logoRayBan from "../assets/rayBan.webp";

import police from "../assets/police.webp";

const Combination = () => {
  return (
    <div>
      <h3 className="h3-cc">Algunas de nuestras marcas</h3>
      <div className="combo">
        <img src={logoPrada} alt="imagen1" className="imagen-1"></img>
        <img src={EA} alt="imagen1" className="imagen-1"></img>
        <img src={CH} alt="imagen1" className="imagen-1"></img>
        <img src={logoTous} alt="imagen1" className="imagen-1"></img>
        <img src={logoRayBan} alt="imagen1" className="imagen-1"></img>
        <img src={police} alt="imagen1" className="imagen-1"></img>
      </div>
    </div>
  );
};

export default Combination;
