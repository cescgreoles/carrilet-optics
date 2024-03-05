import React from "react";
import "../styles/LaOptica.scss";
import QuienSomos from "../components/QuienSomos-1";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import ThreeImage from "../components/ThreeImage";
import TextSpecialists from "../components/TextSpecialists";
import SpecialtiesSection from "../components/SpecialistsCard";
import Footer from "../components/Footer";
import BannerPublicitario from "../components/BannerPublicitario";

const LaOptica = () => {
  return (
    <div className="laOptica">
      <NavigationInformation />
      <NavigationBar />
      <QuienSomos />
      <ThreeImage />
      <TextSpecialists />
      <SpecialtiesSection />
      <Footer />
      <BannerPublicitario />
    </div>
  );
};

export default LaOptica;
