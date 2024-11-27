/*
*/

import { useEffect, useState } from "react";


export default function Ejem20() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Desmontando componente");
      clearInterval(intervalo); // Limpiamos el intervalo al desmontar el componente
    };
  }, []);

  return <p>Segundos: {segundos}</p>;
}
