import React from "react";
import { useState, useEffect } from "react";
import "../styles/Home.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Imagen from "../components/Imagen";
import Combination from "../components/Combination";
import NestedModal from "../components/SeccionModal";
import BannerPublicitario from "../components/BannerPublicitario";
import CookieBanner from "../components/CookieBanner";

const Home = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    setShowCookieBanner(!hasAcceptedCookies);
  }, []);

  const handleAcceptCookies = () => {
    // Guardar en el almacenamiento local que el usuario ha aceptado las cookies
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };
  return (
    <div className="container">
      <NavigationInformation />
      <NavigationBar />
      <Imagen />
      <NestedModal />
      <Combination />
      <Footer />
      <BannerPublicitario />
      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
    </div>
  );
};

export default Home;
