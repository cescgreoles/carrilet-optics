import React from "react";
import "../styles/Home.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import Secciones from "../components/Secciones";
import Footer from "../components/Footer";
import Imagen from "../components/Imagen";
import Combination from "../components/Combination";

const Home = () => {
  return (
    <div className="container">
      <NavigationInformation />
      <NavigationBar />
      <Imagen />
      <Secciones />
      <Combination />
      <Footer />
    </div>
  );
};

export default Home;
