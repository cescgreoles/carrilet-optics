import React from "react";
import "../styles/Servicios.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import ServiciosOne from "../components/ServiciosOne";
import ContactForm from "../components/ContactForm";

const Servicios = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <ServiciosOne />
      <div className="conjunt">
        <span className="span">¿Tienes dudas sobre nuestros servicios?</span>
        <p className="parraf">
          ¿Tienes alguna pregunta sobre nuestros servicios ópticos? Estamos aquí
          para resolver todas tus dudas y ayudarte a encontrar la solución
          perfecta para tus necesidades visuales. Completa el formulario a
          continuación y nuestro equipo estará encantado de ayudarte
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Servicios;
