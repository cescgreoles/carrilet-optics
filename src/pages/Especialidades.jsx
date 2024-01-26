import React from "react";
import BackButton from "../components/BackButton";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import BajaVision from "../components/Especialidades/BajaVision";

const Especialidades = () => {
  return (
    <div className="specialists">
      <BackButton />
      <NavigationInformation />
      <NavigationBar />
      <BajaVision />
    </div>
  );
};

export default Especialidades;
