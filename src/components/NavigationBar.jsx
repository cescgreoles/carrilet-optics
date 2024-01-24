import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.scss"; // Importa tu archivo CSS para estilos específicos
import logoUlleres from "../assets/logoUlleres.png";

const NavigationBar = () => {
  const [expanded] = useState(false);

  return (
    <Navbar expanded={expanded} className="navbar">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="ml-auto-item">
            <img
              src={logoUlleres}
              alt="logo-ulleres"
              className="logoUlleres"
            ></img>
          </Nav.Link>
          <Nav.Link href="laOptica" className="ml-auto-item">
            Óptica
          </Nav.Link>
          <Nav.Link href="/especialidades" className="ml-auto-item">
            Especialidades
          </Nav.Link>
          <Nav.Link href="/servicios" className="ml-auto-item">
            Servicios
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;