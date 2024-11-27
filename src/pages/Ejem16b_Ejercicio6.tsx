/*
Ejercicio: Semáforo interactivo
Crea una aplicación React que simule un semáforo con tres luces: roja, amarilla y verde. Solo una luz puede estar encendida al mismo tiempo.

Requisitos:
Estado inicial:

El semáforo comienza con la luz roja encendida.
Cambio de luz:

Agrega un botón "Cambiar" que al hacer clic cambie la luz encendida en este orden: roja → amarilla → verde → roja.
Visualización del semáforo:

Usa div o span para representar cada luz, con un color diferente para cada una (rojo, amarillo, verde).
Cambia el estilo de la luz correspondiente para que parezca encendida (puedes usar clases de CSS o estilos en línea).
*/



import React, { useState } from 'react';

const Semaforo = () => {
  const [color, setColor] = useState('rojo');

  const cambiarColor = () => {
    setColor((prevColor) => {
      if (prevColor === 'rojo') return 'amarillo';
      if (prevColor === 'amarillo') return 'verde';
      return 'rojo';
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: color === 'rojo' ? 'red' : 'gray',
            margin: '10px',
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: color === 'amarillo' ? 'yellow' : 'gray',
            margin: '10px',
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: color === 'verde' ? 'green' : 'gray',
            margin: '10px',
          }}
        ></div>
      </div>
      <button
        onClick={cambiarColor}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Cambiar
      </button>
    </div>
  );
};

export default Semaforo;