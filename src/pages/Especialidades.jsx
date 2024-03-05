import React from "react";
import "../styles/BajaVision.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import BajaVision from "../components/Especialidades/BajaVision";
import Footer from "../components/Footer";
import BannerPublicitario from "../components/BannerPublicitario";

const Especialidades = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <div className="specialists">
        <BajaVision />
      </div>
      <Footer />
      <BannerPublicitario />
    </div>
  );
};

export default Especialidades;
