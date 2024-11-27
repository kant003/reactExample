/*

Ejercicio: Lista de nombres
Crea una aplicación React que recorra un array de nombres y los muestre en pantalla como una lista. Al hacer clic en un nombre, muestra un mensaje diciendo que fue seleccionado.

Requisitos:
Estado inicial:
Un array de nombres predefinido (por ejemplo, ['Ana', 'Juan', 'María', 'Luis']).
Lista:
Usa map para recorrer el array y mostrar cada nombre en pantalla como un elemento de lista (<li>).
Interacción:
Al hacer clic en un nombre, muestra un mensaje debajo de la lista indicando el nombre seleccionado.


*/


import React, { useState } from 'react';

const ListaNombres = () => {
  const [nombres] = useState(['Ana', 'Juan', 'María', 'Luis']);
  const [seleccionado, setSeleccionado] = useState('');

  const manejarClick = (nombre) => {
    setSeleccionado(nombre);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Lista de Nombres</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {nombres.map((nombre, index) => (
          <li
            key={index}
            onClick={() => manejarClick(nombre)}
            style={{
              margin: '10px 0',
              cursor: 'pointer',
              fontSize: '18px',
              color: 'blue',
              textDecoration: 'underline',
            }}
          >
            {nombre}
          </li>
        ))}
      </ul>
      {seleccionado && (
        <p style={{ marginTop: '20px', fontSize: '16px' }}>
          Seleccionaste: <strong>{seleccionado}</strong>
        </p>
      )}
    </div>
  );
};

export default ListaNombres;
