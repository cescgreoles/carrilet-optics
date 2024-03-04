import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Dirección</h3>
        <p>Av. del Carrilet, 80, 08902 L'Hospitalet de Llobregat, Barcelona</p>
      </div>
      <div className="footer-section">
        <h3>Contacto</h3>
        <p>Email: opticacarrilet@gmail.com</p>
        <p>Telefono: 934 21 28 53</p>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
