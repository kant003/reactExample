/*
*/

import { useEffect, useState } from "react";

export default function Ejem22() {
  const [tecla, setTecla] = useState("");

  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => setTecla(e.key);

    window.addEventListener("keydown", manejarTecla);

    return () => {
      window.removeEventListener("keydown", manejarTecla); // Eliminamos el evento
    };
  }, []);

  return <p>Tecla presionada: {tecla}</p>;
}
