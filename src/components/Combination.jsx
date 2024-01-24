import React from "react";
import "../styles/Combination.scss";
import logoPrada from "../assets/logoPrada.jpeg";
import EA from "../assets/emporioArmani.jpeg";
import CH from "../assets/CH.png";
import logoTous from "../assets/logoTous.jpeg";
import logoRayBan from "../assets/rayBan.jpeg";

import police from "../assets/police.png";

const Combination = () => {
  return (
    <div className="combo">
      <img src={logoPrada} alt="imagen1" className="imagen-1"></img>
      <img src={EA} alt="imagen1" className="imagen-1"></img>
      <img src={CH} alt="imagen1" className="imagen-1"></img>
      <img src={logoTous} alt="imagen1" className="imagen-1"></img>
      <img src={logoRayBan} alt="imagen1" className="imagen-1"></img>
      <img src={police} alt="imagen1" className="imagen-1"></img>
    </div>
  );
};

export default Combination;
