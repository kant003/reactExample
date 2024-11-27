/*
*/

import { useEffect, useState } from "react";


export default function Ejem19() {
  const [cont, setCont] = useState(0);

  /* useEffect(() => {
    console.log("El componente se renderizó o el contador cambió");
  }); */

  useEffect(() => {
    console.log("El componente se montó");
  }, []);

  useEffect(() => {
    console.log("El contador cambió:", cont);
  }, [cont]);

  return (
    <div>
      <p>Has hecho clic {cont} veces</p>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
    </div>
  );
}
