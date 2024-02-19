import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.scss"; // Importa tu archivo CSS para estilos específicos
import logoUlleres from "../assets/logoUlleres.png";

const NavigationBar = () => {
  const [expanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink("");
  };

  return (
    <Navbar expanded={expanded} className="navbar">
      <nav className="responsive-navbar-nav">
        <ul>
          <li>
            <Nav.Link
              href="/"
              className={`ml-auto-item ${
                activeLink === "home" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={logoUlleres}
                alt="logo-ulleres"
                className="logoUlleres"
              ></img>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="laOptica"
              className={`ml-auto-item ${
                activeLink === "optica" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("optica")}
              onMouseLeave={handleMouseLeave}
            >
              Óptica
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="/especialidades"
              className={`ml-auto-item ${
                activeLink === "especialidades" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("especialidades")}
              onMouseLeave={handleMouseLeave}
            >
              Especialidades
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="/servicios"
              className={`ml-auto-item ${
                activeLink === "servicios" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("servicios")}
              onMouseLeave={handleMouseLeave}
            >
              Servicios
            </Nav.Link>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;
