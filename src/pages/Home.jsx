import React from "react";
import "../styles/Home.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import Secciones from "../components/Secciones";
import Footer from "../components/Footer";
import Imagen from "../components/Imagen";
import Combination from "../components/Combination";
import { Carousel } from "react-bootstrap";
// import BannerPublicitario from "../components/BannerPublicitario";

const Home = () => {
  return (
    <div className="container">
      <NavigationInformation />
      <NavigationBar />
      <Imagen />
      <Carousel />
      <Secciones />
      <Combination />
      <Footer />
    </div>
  );
};

export default Home;
