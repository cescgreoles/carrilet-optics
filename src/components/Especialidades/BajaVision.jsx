import React, { useState } from "react";
import "../../styles/BajaVision.scss";
import Photo1 from "../../assets/bajaVision-Specialists.webp";
import Photo2 from "../../assets/diagnostico.webp";
import Photo3 from "../../assets/adaptacion.webp";
import Photo4 from "../../assets/vision.webp";
import Photo5 from "../../assets/carousel4.webp";
import Photo6 from "../../assets/glasses1.webp";
import Photo7 from "../../assets/audifonos-2.webp";
import Photo8 from "../../assets/audifonos-1.webp";

const SectionWithImage = ({
  title,
  text,
  sectionClass,
  handleExpand,
  imageSrc,
}) => {
  return (
    <div className={`section ${sectionClass}`}>
      <div className="content">
        <div className="text-wrapper">
          <h2>{title}</h2>
          <p className="text">{text}</p>
        </div>
        <div className="image-wrapper">
          <img
            src={imageSrc}
            alt={`Imagen de ${title}`}
            className="section-image"
          />
        </div>
      </div>
    </div>
  );
};

const BajaVision = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const handleExpand = (sectionClass) => {
    if (expandedSections.includes(sectionClass)) {
      setExpandedSections(
        expandedSections.filter((item) => item !== sectionClass)
      );
    } else {
      setExpandedSections([...expandedSections, sectionClass]);
    }
  };

  return (
    <div className="baja-vision-container">
      <SectionWithImage
        title="Baja Visión"
        text="Ofrecemos un tratamiento especializado para aquellos con deterioro visual significativo, asegurando una atención integral y personalizada para mejorar la calidad de vida de nuestros pacientes mediante opciones de manejo visual adaptadas a sus necesidades específicas."
        sectionClass="section-1"
        expanded={expandedSections.includes("section-1")}
        handleExpand={handleExpand}
        imageSrc={Photo1}
        textAdicional=""
      />

      <SectionWithImage
        title="Diagnóstico y tratamiento del déficit visual"
        text="Nuestro equipo médico altamente calificado realiza evaluaciones exhaustivas para identificar y abordar eficazmente cualquier problema visual, garantizando un cuidado integral que incluye diagnóstico preciso y planes de tratamiento individualizados para cada paciente."
        sectionClass="section-2"
        expanded={expandedSections.includes("section-2")}
        handleExpand={handleExpand}
        imageSrc={Photo2}
      />

      <SectionWithImage
        title="Glaucoma (Toma de la tensión ocular)"
        text="Implementamos medidas proactivas para prevenir y detectar el glaucoma en sus etapas iniciales, realizando exámenes especializados que permiten identificar posibles riesgos y ofreciendo opciones de tratamiento para preservar la salud visual a largo plazo."
        sectionClass="section-3"
        expanded={expandedSections.includes("section-3")}
        handleExpand={handleExpand}
        imageSrc={Photo3}
      />

      <SectionWithImage
        title="Cataratas"
        text="Nuestro enfoque preventivo y detección precoz de las cataratas garantiza una intervención temprana para mantener la claridad visual y mejorar la calidad de vida de nuestros pacientes, mediante evaluaciones regulares y opciones de tratamiento efectivas."
        sectionClass="section-4"
        expanded={expandedSections.includes("section-4")}
        handleExpand={handleExpand}
        imageSrc={Photo4}
      />

      <SectionWithImage
        title="Adaptación de gafas y lentes de contacto"
        text="Nuestros especialistas proporcionan una adaptación personalizada de gafas y lentes, teniendo en cuenta las necesidades individuales de cada paciente para garantizar una visión óptima y confort visual, con asesoramiento experto en selección y ajuste de monturas y lentes."
        sectionClass="section-5"
        expanded={expandedSections.includes("section-5")}
        handleExpand={handleExpand}
        imageSrc={Photo5}
      />

      <SectionWithImage
        title="Lentes especiales para Queratocono y astigmatismo irregular"
        text="Ofrecemos lentes especializadas diseñadas para abordar problemas corneales como el queratocono y el astigmatismo irregular, brindando soluciones visuales personalizadas que mejoran la calidad de vida de nuestros pacientes con condiciones corneales específicas."
        sectionClass="section-6"
        expanded={expandedSections.includes("section-6")}
        handleExpand={handleExpand}
        imageSrc={Photo6}
      />

      <SectionWithImage
        title="Diagnóstico de pérdida auditiva"
        text="Nuestro equipo de especialistas realiza evaluaciones auditivas completas para diagnosticar y evaluar la pérdida auditiva, utilizando tecnología avanzada y experiencia clínica para proporcionar diagnósticos precisos y recomendaciones de manejo auditivo adaptadas a las necesidades individuales de cada paciente."
        sectionClass="section-7"
        expanded={expandedSections.includes("section-7")}
        handleExpand={handleExpand}
        imageSrc={Photo7}
      />

      <SectionWithImage
        title="Audioprótesis"
        text="Contamos con audioprotesistas titulados que ofrecen asesoramiento experto y adaptación de audífonos personalizados, brindando soluciones auditivas efectivas que mejoran la calidad de vida de nuestros pacientes, junto con una variedad de productos para el cuidado auditivo y la protección del oído."
        sectionClass="section-8"
        expanded={expandedSections.includes("section-8")}
        handleExpand={handleExpand}
        imageSrc={Photo8}
      />
    </div>
  );
};

export default BajaVision;
