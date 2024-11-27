/*
*/

import { useState, ChangeEvent, FormEvent } from "react";

export default function Ejem26() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
  });
  const [error, setError] = useState("");

  const manejarCambio = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
    setError(""); // Limpiar errores al escribir
  };

  const manejarEnvio = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formulario.nombre || !formulario.correo) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!formulario.correo.includes("@")) {
      setError("El correo debe ser válido");
      return;
    }
    alert("Formulario enviado correctamente");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio} />
      </label>
      <label>
        Correo:
        <input type="email" name="correo" value={formulario.correo} onChange={manejarCambio} />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
