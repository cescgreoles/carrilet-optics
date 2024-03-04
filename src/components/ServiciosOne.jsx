import React, { useState } from "react";
import "../styles/ServiciosOne.scss";

const ServiciosOne = () => {
  const [openDiv, setOpenDiv] = useState(null);

  const handleClick = (divNumber) => {
    setOpenDiv(openDiv === divNumber ? null : divNumber);
  };

  return (
    <div className="base-div">
      <div className="base-div-1" onClick={() => handleClick(1)}>
        <p>
          EXAMEN OPTOMÉTRICO GRATUITO{" "}
          {openDiv === 1 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 1 && (
          <p className="base-div-2">
            Realizamos un completo examen optométrico gratuito para evaluar su
            salud visual.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(2)}>
        <p>
          AUDIOMETRÍA GRATUITA{" "}
          {openDiv === 2 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 2 && (
          <p className="base-div-2">
            Ofrecemos pruebas auditivas gratuitas para evaluar su audición.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(3)}>
        <p>
          ADAPTACIÓN DE AUDÍFONOS{" "}
          {openDiv === 3 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 3 && (
          <p className="base-div-2">
            Contamos con especialistas en adaptación de audífonos para
            satisfacer sus necesidades auditivas.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(4)}>
        <p>
          ESPECIALISTAS EN BAJA VISIÓN (AYUDAS VISUALES){" "}
          {openDiv === 4 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 4 && (
          <p className="base-div-2">
            Nuestros especialistas en baja visión brindan ayuda y soluciones
            visuales personalizadas.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(5)}>
        <p>
          ADAPTACIÓN LENTES DE CONTACTO ESPECIALES{" "}
          {openDiv === 5 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 5 && (
          <p className="base-div-2">
            Ofrecemos adaptación de lentes de contacto especiales para
            condiciones oculares irregulares como queratocono y astigmatismo
            irregular.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(6)}>
        <p>
          MONTAJE Y TALLADO DE LENTES{" "}
          {openDiv === 6 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 6 && (
          <p className="base-div-2">
            Realizamos el montaje y tallado de lentes personalizados para
            garantizar la mejor visión.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(7)}>
        <p>
          MEDIDA DE LA TENSIÓN INTRAOCULAR{" "}
          {openDiv === 7 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 7 && (
          <p className="base-div-2">
            Realizamos mediciones de la tensión intraocular para evaluar la
            salud ocular.
          </p>
        )}
      </div>
      <div className="base-div-1" onClick={() => handleClick(7)}>
        <p>
          MEDIDA DE LA TENSIÓN INTRAOCULAR{" "}
          {openDiv === 7 ? <span>&#9650;</span> : <span>&#9660;</span>}
        </p>
        {openDiv === 7 && (
          <p className="base-div-2">
            Realizamos mediciones de la tensión intraocular para evaluar la
            salud ocular.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiciosOne;
