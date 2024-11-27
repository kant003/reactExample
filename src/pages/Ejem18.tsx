/*
No funciona como se espera
El estado no se actualiza inmediatamente, sino que se encola y se ejecuta en el siguiente renderizado.
*/

import { useState } from "react";


export default function Ejem18() {
  const [count, setCount] = useState(0);
  const increment = () => {

    //count = count + 1; // Esto no se ejecuta

    setCount(count + 1);
    setCount(count + 1); // Esto no se ejecuta

    //setCount((prev) => prev + 1);
    //setCount((prev) => prev + 1); // Ahora sí incrementa dos veces 
  }
  return (
    <>
       <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Incrementar: {count}
        </button>
    </>
  );
}
