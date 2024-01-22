import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.scss"; // Importa tu archivo CSS para estilos específicos

const NavigationBar = () => {
  const [expanded] = useState(false);

  return (
    <Navbar expanded={expanded}>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="laOptica" className="ml-auto-item">
            Óptica
          </Nav.Link>
          <Nav.Link href="/productos" className="ml-auto-item">
            Especialidades
          </Nav.Link>
          <Nav.Link href="/servicios" className="ml-auto-item">
            Servicios
          </Nav.Link>
          <Nav.Link href="/contacto" className="ml-auto-item">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
