import React from "react";
import "../styles/NavigationInformation.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavigationInformation = () => {
  const emailAdress = "opticacarrilet@gmail.com";
  const phoneNumber = " 934212853";
  const address = "Optica Carrilet";
  const instagramProfile = "https://www.instagram.com/tu_perfil"; // Reemplaza esto con tu perfil de Instagram

  const openInMaps = () => {
    const formattedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`
    );
  };
  const openInstagram = () => {
    window.open(instagramProfile, "_blank");
  };

  return (
    <div className="navigation">
      <a className="enlace" href={`mailto:${emailAdress}`}>
        <AiOutlineMail className="icon" />
      </a>
      <a className="enlace" href={`tel:${phoneNumber}`}>
        <AiOutlinePhone className="icon" />
      </a>
      <a className="enlace" href=".." onClick={openInMaps}>
        <FaMapMarkerAlt className="icon" />
      </a>
      <a className="enlace" href=".." onClick={openInstagram}>
        <FaInstagram className="icon" />
      </a>
    </div>
  );
};

export default NavigationInformation;
