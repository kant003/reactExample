import React, { useContext, useState } from 'react'
import { BackgroundContext } from '../contexts/backgroundContext';

export const A = () => {
  const { background, setBackground } = useContext(BackgroundContext);

  return (
    <div>A {background}
    <button onClick={() => setBackground("dark")}>Light</button>
    </div>

  )
}
export const B = () => {
  const { background, setBackground } = useContext(BackgroundContext);

  return (
    <div>B {background}
        <button onClick={() => setBackground("orange")}>Light</button>

    </div>
  )
}

export default function Ejem30() {
  const [background, setBackground] = useState<string>("light"); // Estado local para el contexto

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <A />
      <B />
    </BackgroundContext.Provider>
  )
}
