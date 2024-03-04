import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_36q377n", // Reemplaza con tu ID de servicio de EmailJS
        "template_1d50ev9", // Reemplaza con tu ID de plantilla de EmailJS
        e.target,
        "02v5LAiTAqxhZvTpB" // Reemplaza con tu ID de usuario de EmailJS
      )
      .then(
        (result) => {
          console.log("Email enviado con éxito", result.text);
          // Aquí puedes manejar el éxito del envío del correo electrónico
        },
        (error) => {
          console.error("Error al enviar el email:", error.text);
          // Aquí puedes manejar los errores del envío del correo electrónico
        }
      );

    // Limpia el formulario después de enviar el correo electrónico
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="contact-form-container"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
