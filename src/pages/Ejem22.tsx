/*
*/

import { useEffect, useState } from "react";

export default function Ejem22() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(contador + 1); // Esto causará un bucle infinito
    console.log("Contador: ", contador);
  });

  return <div>{contador}</div>
}
