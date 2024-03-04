import React from "react";
import "../styles/BajaVision.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import BajaVision from "../components/Especialidades/BajaVision";

const Especialidades = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <div className="specialists">
        <BajaVision />
      </div>{" "}
    </div>
  );
};

export default Especialidades;
