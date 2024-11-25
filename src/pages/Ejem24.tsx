/*
*/

import { useState, ChangeEvent, FormEvent } from "react";

export default function Ejem24() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
  });

  const manejarCambio = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Datos enviados:\nNombre: ${formulario.nombre}\nCorreo: ${formulario.correo}`);
  };

  return (
    <form onSubmit={manejarEnvio} className="flex flex-col gap-3">
      <label>
        Nombre:
        <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} />
      </label>
      <label>
        Correo:
        <input type="email" name="correo" value={formulario.correo} onChange={manejarCambio} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
