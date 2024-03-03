import React, { useState } from "react";
import "../../styles/BajaVision.scss";
import glasses1 from "../../assets/glasses1.png";

const SectionWithImage = ({
  title,
  text,
  sectionClass,
  expanded,
  handleExpand,
  imageSrc,
}) => {
  return (
    <div className={`section ${sectionClass}`}>
      <div className="content">
        <div className="text-wrapper">
          <h2>{title}</h2>
          <p className="text">{text}</p>
          {expanded && <p className="expanded-text">Texto adicional...</p>}
          <button onClick={() => handleExpand(sectionClass)}>
            {expanded ? "Mostrar menos" : "Mostrar más"}
          </button>
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
        text="La baja visión se refiere a una disminución significativa de la capacidad visual que no puede ser corregida completamente con gafas, lentes de contacto ni mediante tratamientos médicos, farmacológicos o quirúrgicos."
        sectionClass="section-1"
        expanded={expandedSections.includes("section-1")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Diagnóstico y tratamiento del déficit visual"
        text="La valoración de la pérdida de función visual es esencial para determinar el diagnóstico, pronóstico y duración del tratamiento en pacientes de cualquier grupo de edad. También proporcionamos el servicio gratuito de consulta con un médico oftalmólogo para una evaluación más completa. Nuestros especialistas del Hospital de Bellvitge se asegurarán de que usted reciba el tratamiento adecuado para mejorar al máximo su pérdida visual."
        sectionClass="section-2"
        expanded={expandedSections.includes("section-2")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Glaucoma (Toma de la tensión ocular)"
        text="Examen a partir de registros de la tensión ocular mediante el cual prevenimos y detectamos de manera precoz el glaucoma."
        sectionClass="section-3"
        expanded={expandedSections.includes("section-3")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Cataratas"
        text="Examen a partir de registros de la tensión ocular mediante el cual prevenimos y detectamos de manera precoz el glaucoma."
        sectionClass="section-4"
        expanded={expandedSections.includes("section-4")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Adaptación de gafas y lentes de contacto"
        text="La adaptación de gafas de sol, gafas graduadas y lentes de contacto es el resultado final de la atención visual primaria, que se enfoca en satisfacer las necesidades del paciente. Considerando las características y necesidades personales de cada paciente, proporcionamos un asesoramiento de primera clase en la selección de monturas y tipos de lentes, en su toma de medidas, entrega, ajustes y adaptaciones según sea necesario; así como en el seguimiento posterior."
        sectionClass="section-5"
        expanded={expandedSections.includes("section-5")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Lentes especiales para Queratocono y astigmatismo irregular"
        text="Descripción de las lentes especiales para Queratocono y astigmatismo irregular."
        sectionClass="section-6"
        expanded={expandedSections.includes("section-6")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Diagnóstico de pérdida auditiva"
        sectionClass="section-7"
        expanded={expandedSections.includes("section-7")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />

      <SectionWithImage
        title="Audioprótesis"
        text="Nuestro equipo también cuenta con audioprotesistas titulados para brindar asesoramiento y realizar la adaptación de audífonos. Además contamos con una variedad de productos, incluyendo tapones de baño hechos a medida, tapones para la protección del ruido, bandas acuáticas, y otros elementos esenciales para el cuidado de la salud auditiva. Somos distribuidores oficiales OTICON."
        sectionClass="section-8"
        expanded={expandedSections.includes("section-8")}
        handleExpand={handleExpand}
        imageSrc={glasses1}
      />
    </div>
  );
};

export default BajaVision;
