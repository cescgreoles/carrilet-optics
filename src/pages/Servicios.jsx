import React from "react";
import BackButton from "../components/BackButton";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import ServiciosOne from "../components/ServiciosOne";

const Servicios = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <ServiciosOne />
    </div>
  );
};

export default Servicios;
