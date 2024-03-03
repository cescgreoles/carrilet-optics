import React, { useState } from "react";
import "../styles/Secciones.scss";

const Secciones = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (index) => {
    setSelectedSection(selectedSection === index ? null : index);
  };

  return (
    <div className="seccions">
      <div
        className={`seccions-individual ${
          selectedSection === 1 ? "expanded" : ""
        }`}
        onClick={() => handleSectionClick(1)}
      >
        <div className="seccions-individual-content"></div>
      </div>
      <div
        className={`seccions-individual ${
          selectedSection === 2 ? "expanded" : ""
        }`}
        onClick={() => handleSectionClick(2)}
      >
        <div className="seccions-individual-content"></div>
      </div>
      <div
        className={`seccions-individual ${
          selectedSection === 3 ? "expanded" : ""
        }`}
        onClick={() => handleSectionClick(3)}
      >
        <div className="seccions-individual-content"></div>
      </div>
      <div
        className={`seccions-individual ${
          selectedSection === 4 ? "expanded" : ""
        }`}
        onClick={() => handleSectionClick(4)}
      >
        <div className="seccions-individual-content"></div>
      </div>
    </div>
  );
};

export default Secciones;
