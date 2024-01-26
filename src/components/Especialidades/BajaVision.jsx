import React from "react";
import "../../styles/BajaVision.scss";
import BajaVisionLupa from "../../assets/baja-vision-lupa.jpg";
import Tabla from "../../assets/tabla.png";

const BajaVision = () => {
  return (
    <div>
      <div className="section-vision">
        <h2>Baja Visión</h2>

        <p className="text">
          La baja visión se refiere a una disminución significativa de la
          capacidad visual que no puede ser corregida completamente con gafas,
          lentes de contacto ni mediante tratamientos médicos, farmacológicos o
          quirúrgicos. Esta condición puede dificultar considerablemente la
          realización de actividades cotidianas. Afecta principalmente a la
          población de la tercera edad. De acuerdo con la Organización Mundial
          de la Salud OMS, una persona padece Baja Visión, “cuando tiene una
          agudeza visual (AV) inferior a 6/18 (0,3 decimal) en el mejor ojo con
          la mejor corrección posible, o un campo visual menor o igual a 10
          grados desde el punto de fijación, pero que usa, o puede llegar a usar
          potencialmente la visión para planificar y realizar una tarea”.
           Padecen visión frágil todas aquellas personas que han visto
          disminuida su visión funcional al desarrollar tareas del día a día,
          como trabajar, leer o conducir.
        </p>
      </div>
      <div className="responsive-container">
        <div className="section">
          <img
            src={BajaVisionLupa} // URL de la imagen
            alt="Ejemplo"
            className="image"
          />
        </div>

        <div className="section">
          <img
            src={Tabla} // URL de otra imagen
            alt="Ejemplo"
            className="image"
          />
        </div>
      </div>
      <div className="section-vision">
        <h2>Glaucoma (Toma de la tensión ocular)</h2>

        <p className="text">
          Examen a partir de registros de la tensión ocular mediante el qual
          prevenimos y detectamos de manera precoz el glaucoma.
        </p>
      </div>
      <div className="section-vision">
        <h2>Diagnóstico i tratamiento del déficit visual</h2>

        <p className="text">
          La valoración de la pérdida de función visual es esencial para
          determinar el diagnóstico, pronóstico y duración del tratamiento en
          pacientes de cualquier grupo de edad. También proporcionamos el
          servicio gratuito de consulta con un medico oftalmologo para una
          evaluación más completa. Nuestros especialistas del Hospital de
          Bellvitge se aseguraran de que usted reciba el tratamiento adecuado
          para mejorar al maximo su pérdida visual.
        </p>
      </div>
      <div className="section-vision">
        <h2>Adaptación de gafas y lentes de contacto</h2>

        <p className="text">
          La adaptación de gafas de sol, gafas graduadas y lentes de contacto es
          el resultado final de la atención visual primaria, que se enfoca en
          satisfacer las necesidades del paciente. Considerando las
          características y necesidades personales de cada paciente,
          proporcionamos un asesoramiento de primera clase en la selección de
          monturas y tipos de lentes, en su toma de medidas, entrega, ajustes y
          adaptaciones según sea necesario;a así como en el seguimiento
          posterior.
        </p>
      </div>
      <div className="section-vision">
        <h2>Diagnóstico de pérdida auditiva</h2>

        <p className="text">
          La realización de una audiometría por parte de un audioprotesista
          tiene como objetivo valorar la pérdida auditiva y proporcionar la
          mejor solución.
        </p>
      </div>
      <div className="section-vision">
        <h2>Audioprótesi</h2>

        <p className="text">
          Nuestro equipo también cuenta con audioprotesistas titulados para para
          brindar asesoramiento y realizar la adaptación de audífonos. Además
          contamos con una variedad de productos, incluyendo tapones de baño
          hechos a medida, tapones para la protección del ruido, bandas
          acuáticas, y otros elementos esenciales para el cuidado de la salud
          auditiva. Somos distribuidores oficiales OTICON.
        </p>
      </div>
    </div>
  );
};

export default BajaVision;
