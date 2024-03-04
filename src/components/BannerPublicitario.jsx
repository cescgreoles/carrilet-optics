import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library
import "../styles/BannerPublicitario.scss";

const BannerPublicitario = () => {
  return (
    <div className="banner">
      <span>© 2024 Optica Carrilet</span>
      <span className="span-informative">
        <span>Powered by Francesc Greoles</span>

        <a
          href="https://github.com/cescgreoles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="www.linkedin.com/in/francesc-greoles-a215a5152"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
      </span>
    </div>
  );
};

export default BannerPublicitario;
