import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BackButton from "../components/BackButton";

const Contacto = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/enviar-correo", data);
      // Manejar la redirección o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div>
      <BackButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          ref={register({ required: true })}
        />
        {errors.nombre && <span>Este campo es obligatorio</span>}

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Ingrese un correo electrónico válido</span>}

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          ref={register({ required: true })}
        ></textarea>
        {errors.mensaje && <span>Este campo es obligatorio</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
