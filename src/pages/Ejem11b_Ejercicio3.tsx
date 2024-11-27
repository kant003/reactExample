/*

Ejercicio: Mostrar y ocultar texto
Crea una aplicación React que tenga un botón que permita mostrar y ocultar un mensaje de texto al hacer clic en él.

Requisitos:
Estado inicial:

El mensaje comienza oculto.
Botón:

Al hacer clic en el botón, si el mensaje está oculto, se muestra.
Si el mensaje está visible, se oculta.
Texto del botón:

El botón debe cambiar su texto dinámicamente entre "Mostrar" y "Ocultar" según el estado.
*/

import React, { useState } from 'react';

const MostrarOcultarTexto = () => {
  const [visible, setVisible] = useState(false);

  const toggleTexto = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={toggleTexto}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
      {visible && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          ¡Este es el mensaje que puedes mostrar u ocultar!
        </p>
      )}
    </div>
  );
};

export default MostrarOcultarTexto;
