import React, { useState } from "react";
import "../styles/CookieBanner.scss";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookiesAccepted")
  );

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", true);
    setAccepted(true);
  };

  const rejectCookies = () => {
    localStorage.removeItem("cookiesAccepted");
    setAccepted(false);
  };

  if (accepted) {
    return null; // No mostrar el banner si las cookies ya han sido aceptadas
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p className="cookie-text">
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario. Al continuar navegando por este sitio, aceptas el uso de
          cookies de acuerdo con nuestra{" "}
          <a href="/politica-cookies">política de cookies</a>.
        </p>
        <div>
          <button className="cookie-button accept" onClick={acceptCookies}>
            Aceptar
          </button>
          <button className="cookie-button reject" onClick={rejectCookies}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
