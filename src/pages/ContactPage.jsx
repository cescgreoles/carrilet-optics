import React from "react";
import "../styles/ContactPage.scss";
import NavigationBar from "../components/NavigationBar";
import NavigationInformation from "../components/NavigationInformation";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <div className="conjunt">
        <span className="span">Contacta con la óptica</span>
        <p className="parraf">
          ¿Tienes alguna consulta o pregunta sobre tu salud visual? Estamos aquí
          para ayudarte. Completa el formulario a continuación y nuestro equipo
          de expertos ópticos responderá a todas tus inquietudes con la atención
          y el cuidado que mereces.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
