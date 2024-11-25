/*
El initialState del hijo, solo se ejecuta una vez y nunca mas vuelve a cambiar
 */
import { useState } from "react";
import Boton from "../components/Boton";

function ContadorHijo({ initailState }: { initailState: number }) {
  const [count, setCount] = useState(initailState);
  const increment = () => setCount(count + 1);
  return (
      <Boton onClick={increment}> Incrementar hijo: {count} </Boton>
  );
}

export default function Ejem15() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <>
      <Boton onClick={increment}> Incrementar padre: {count} </Boton>
      <ContadorHijo initailState={count} />
    </>
  );
}
