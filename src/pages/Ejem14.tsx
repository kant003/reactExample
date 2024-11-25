/*

 */
import { useState } from "react";


function Contador({initailState}: {initailState: number}) {
  const [count, setCount] = useState(initailState);
  const increment = () => setCount(count + 1);
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

export default function Ejem14() {
  return <Contador initailState={9} />
}
