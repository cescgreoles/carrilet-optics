import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Nosotros</h3>
        <p>Optica Carrilet, situada en Hospitalet de Barcelona des de 1978</p>
      </div>
      <div className="footer-section">
        <h3>Contacto</h3>
        <p>Email: opticacarrilet@gmail.com</p>
        <p>Telefono: 934 21 28 53</p>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tienda">La Tienda</a>
          </li>
          <li>
            <a href="/services">Nuestros Productos</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
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
              href="https://facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
