/*
*/

import { useState, ChangeEvent, FormEvent } from "react";

export default function Ejem23() {
  const [nombre, setNombre] = useState("");

  const manejarCambio = (e:ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`El nombre enviado es: ${nombre}`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={manejarCambio} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
