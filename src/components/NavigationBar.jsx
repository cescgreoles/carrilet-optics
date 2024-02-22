import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.scss"; // Importa tu archivo CSS para estilos específicos
import logoUlleres from "../assets/logoUlleres.png";

const NavigationBar = () => {
  const [expanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showfirst, setShowFirst] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowFirst(window.innerWidth < 768); // Cambia a true si el ancho es menor que 768px
    };

    handleResize(); // Ejecuta la función al montar el componente para establecer el estado inicial

    window.addEventListener("resize", handleResize); // Escucha cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el event listener al desmontar el componente
    };
  }, []);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink("");
  };

  return (
    <Navbar expanded={expanded} className="navbar">
      <div className="button-none-mobile">
        <button
          onClick={() => setShowFirst(!showfirst)}
          className="button-menu"
        >
          {showfirst ? "Menú ▼" : " Menú ▲"}
        </button>
      </div>

      {showfirst ? (
        <div></div>
      ) : (
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
            <button className="btn-consulta">
              <Nav.Link
                className="especial-button"
                href="/contactForm"
                onMouseEnter={() => handleMouseEnter("servicios")}
                onMouseLeave={handleMouseLeave}
              >
                Consultas
              </Nav.Link>
            </button>
          </ul>
        </nav>
      )}
    </Navbar>
  );
};

export default NavigationBar;
