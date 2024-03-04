import React from "react";
import "../styles/SpecialistsCard.scss";
import doctor1 from "../assets/doctor1.webp";
import doctor2 from "../assets/doctor2.jpeg";

const SpecialistCard = ({ name, age, license, specialties, image }) => {
  return (
    <div className="specialist-card">
      <img src={image} alt={name} className="specialist-image" />
      <div className="specialist-info">
        <h3 className="specialist-name">{name}</h3>
        <p className="specialist-details">Edad: {age}</p>
        <p className="specialist-details">Licencia: {license}</p>
        <p className="specialist-details">Especialidades: {specialties}</p>
      </div>
    </div>
  );
};

const SpecialtiesSection = () => {
  return (
    <div className="specialists-container">
      <SpecialistCard
        name="Dr. Juan Pérez"
        age="42"
        license="Licencia médica 12345"
        specialties="Oftalmología, Cirugía Refractiva"
        image={doctor1}
      />
      <SpecialistCard
        name="Dra. María García"
        age="35"
        license="Licencia médica 67890"
        specialties="Dermatología, Cirugía Estética"
        image={doctor2}
      />
    </div>
  );
};

export default SpecialtiesSection;
