/* import  { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar} style={{ margin: '5px' }}>
        Incrementar
      </button>
      <button onClick={decrementar} style={{ margin: '5px' }}>
        Decrementar
      </button>
      <button onClick={reiniciar} style={{ margin: '5px' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Contador; */


import { useState } from 'react';

const useCounter = (inicial = 0) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(inicial);

  return { contador, incrementar, decrementar, reiniciar };
};



function Ejem28() {
  const { contador, incrementar, decrementar, reiniciar } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar} style={{ margin: '5px' }}>
        Incrementar
      </button>
      <button onClick={decrementar} style={{ margin: '5px' }}>
        Decrementar
      </button>
      <button onClick={reiniciar} style={{ margin: '5px' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Ejem28;
