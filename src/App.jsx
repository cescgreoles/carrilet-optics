import "../src/App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Especialidades from "./pages/Especialidades";
import Servicios from "./pages/Servicios";
import Home from "./pages/Home";
import LaOptica from "./pages/LaOptica";
import CookieBanner from "./components/CookieBanner";
import ContactPage from "./pages/ContactPage";

function App() {
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
    <div className="App">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="laOptica" element={<LaOptica />} />
          <Route path="especialidades" element={<Especialidades />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contactPage" element={<ContactPage />} />
        </Routes>
      </main>
      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}{" "}
    </div>
  );
}

export default App;
