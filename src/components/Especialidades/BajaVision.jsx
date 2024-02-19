import React from "react";
import "../../styles/BajaVision.scss";
import BajaVisionLupa from "../../assets/baja-vision-lupa.jpg";
import Tabla from "../../assets/tabla.png";

const BajaVision = () => {
  return (
    <div className="baja-vision-container">
      <div className="section">
        <div className="content">
          <h2>Baja Visión</h2>
          <p className="text">
            La baja visión se refiere a una disminución significativa de la
            capacidad visual que no puede ser corregida completamente con gafas,
            lentes de contacto ni mediante tratamientos médicos, farmacológicos
            o quirúrgicos.
          </p>
        </div>
        <div className="image-container">
          <img src={BajaVisionLupa} alt="Ejemplo" className="image" />
        </div>
      </div>
      <div className="section">
        <div className="image-container">
          <img src={Tabla} alt="Ejemplo" className="image" />
        </div>
        <div className="content">
          <h2>Glaucoma (Toma de la tensión ocular)</h2>
          <p className="text">
            Examen a partir de registros de la tensión ocular mediante el cual
            prevenimos y detectamos de manera precoz el glaucoma.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>Diagnóstico y tratamiento del déficit visual</h2>
          <p className="text">
            La valoración de la pérdida de función visual es esencial para
            determinar el diagnóstico, pronóstico y duración del tratamiento en
            pacientes de cualquier grupo de edad. También proporcionamos el
            servicio gratuito de consulta con un médico oftalmólogo para una
            evaluación más completa. Nuestros especialistas del Hospital de
            Bellvitge se asegurarán de que usted reciba el tratamiento adecuado
            para mejorar al máximo su pérdida visual.
          </p>
        </div>
        <div className="image-container">
          <img src={BajaVisionLupa} alt="Ejemplo" className="image" />
        </div>
      </div>
      <div className="section">
        <div className="image-container">
          <img src={Tabla} alt="Ejemplo" className="image" />
        </div>
        <div className="content">
          <h2>Adaptación de gafas y lentes de contacto</h2>
          <p className="text">
            La adaptación de gafas de sol, gafas graduadas y lentes de contacto
            es el resultado final de la atención visual primaria, que se enfoca
            en satisfacer las necesidades del paciente. Considerando las
            características y necesidades personales de cada paciente,
            proporcionamos un asesoramiento de primera clase en la selección de
            monturas y tipos de lentes, en su toma de medidas, entrega, ajustes
            y adaptaciones según sea necesario; así como en el seguimiento
            posterior.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>Diagnóstico de pérdida auditiva</h2>
          <p className="text">
            La realización de una audiometría por parte de un audioprotesista
            tiene como objetivo valorar la pérdida auditiva y proporcionar la
            mejor solución.
          </p>
        </div>
        <div className="image-container">
          <img src={BajaVisionLupa} alt="Ejemplo" className="image" />
        </div>
      </div>
      <div className="section">
        <div className="image-container">
          <img src={Tabla} alt="Ejemplo" className="image" />
        </div>
        <div className="content">
          <h2>Audioprótesis</h2>
          <p className="text">
            Nuestro equipo también cuenta con audioprotesistas titulados para
            brindar asesoramiento y realizar la adaptación de audífonos. Además
            contamos con una variedad de productos, incluyendo tapones de baño
            hechos a medida, tapones para la protección del ruido, bandas
            acuáticas, y otros elementos esenciales para el cuidado de la salud
            auditiva. Somos distribuidores oficiales OTICON.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BajaVision;
