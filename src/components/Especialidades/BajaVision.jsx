import React from "react";
import "../../styles/BajaVision.scss";

const SectionWithImage = ({ title, text, sectionClass }) => {
  return (
    <div className={`section ${sectionClass}`}>
      <div className="content">
        <h2>{title}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

const BajaVision = () => {
  return (
    <div className="baja-vision-container">
      <SectionWithImage
        title="Baja Visión"
        text="La baja visión se refiere a una disminución significativa de la capacidad visual que no puede ser corregida completamente con gafas, lentes de contacto ni mediante tratamientos médicos, farmacológicos o quirúrgicos."
        sectionClass="section-1"
      />

      <SectionWithImage
        title="Diagnóstico y tratamiento del déficit visual"
        text="La valoración de la pérdida de función visual es esencial para determinar el diagnóstico, pronóstico y duración del tratamiento en pacientes de cualquier grupo de edad. También proporcionamos el servicio gratuito de consulta con un médico oftalmólogo para una evaluación más completa. Nuestros especialistas del Hospital de Bellvitge se asegurarán de que usted reciba el tratamiento adecuado para mejorar al máximo su pérdida visual."
        sectionClass="section-2"
      />
      <SectionWithImage
        title="Glaucoma (Toma de la tensión ocular)"
        text="Examen a partir de registros de la tensión ocular mediante el cual prevenimos y detectamos de manera precoz el glaucoma."
        sectionClass="section-3"
      />
      <SectionWithImage
        title="Cataratas"
        text="Examen a partir de registros de la tensión ocular mediante el cual prevenimos y detectamos de manera precoz el glaucoma."
        sectionClass="section-4"
      />
      <SectionWithImage
        title="Adaptación de gafas y lentes de contacto"
        text="La adaptación de gafas de sol, gafas graduadas y lentes de contacto es el resultado final de la atención visual primaria, que se enfoca en satisfacer las necesidades del paciente. Considerando las características y necesidades personales de cada paciente, proporcionamos un asesoramiento de primera clase en la selección de monturas y tipos de lentes, en su toma de medidas, entrega, ajustes y adaptaciones según sea necesario; así como en el seguimiento posterior."
        sectionClass="section-5"
      />
      <SectionWithImage
        title="Lentes especiales para Queratocono y astigmatismo irregular"
        text="Descripción de las lentes especiales para Queratocono y astigmatismo irregular."
        sectionClass="section-6"
      />
      <SectionWithImage
        title="Diagnóstico de pérdida auditiva"
        sectionClass="section-7"
      />
      <SectionWithImage
        title="Audioprótesis"
        text="Nuestro equipo también cuenta con audioprotesistas titulados para brindar asesoramiento y realizar la adaptación de audífonos. Además contamos con una variedad de productos, incluyendo tapones de baño hechos a medida, tapones para la protección del ruido, bandas acuáticas, y otros elementos esenciales para el cuidado de la salud auditiva. Somos distribuidores oficiales OTICON."
        sectionClass="section-8"
      />
    </div>
  );
};

export default BajaVision;
