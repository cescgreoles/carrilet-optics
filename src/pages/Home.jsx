import React from "react";
import "../styles/Home.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Imagen from "../components/Imagen";
import Combination from "../components/Combination";
import NestedModal from "../components/SeccionModal";
import BannerPublicitario from "../components/BannerPublicitario";

const Home = () => {
  return (
    <div className="container">
      <NavigationInformation />
      <NavigationBar />
      <Imagen />
      <NestedModal />
      <Combination />
      <Footer />
      <BannerPublicitario />
    </div>
  );
};

export default Home;
