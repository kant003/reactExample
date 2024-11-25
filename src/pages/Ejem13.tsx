/*
 Si se renderiza un componente padre, tambien se renderizan sus hijos, pero no se pintan en el DOM
 indipendientemente de si sus props han cambiado o no.

 Al contario no pasa


 Esto se puede evitar usando React.memo
 */
import { useState } from "react";


function ContadorHijo() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  console.log("ContadorHijo:", count);
  return (
    <>
       <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Contador hijo: {count}
        </button>
    </>
  );
}

export default function Ejem13() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  console.log("Contador padre:", count);
  return (
    <>
       <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Contador padre: {count}
        </button>

        <ContadorHijo />
    </>
  );
}
