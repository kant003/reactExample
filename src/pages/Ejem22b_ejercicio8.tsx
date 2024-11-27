/*
componente en React que muestre el precio actual de Bitcoin utilizando una API gratuita:

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur

*/


import React, { useState, useEffect } from 'react';

const PrecioBitcoin = () => {
  const [precio, setPrecio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPrecio = async () => {
      try {
        const respuesta = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos');
        }
        const datos = await respuesta.json();
        setPrecio(datos.bitcoin.usd);
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerPrecio();
  }, []);

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;
  }

  if (precio === null) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Precio Actual de Bitcoin</h2>
      <p style={{ fontSize: '24px' }}>${precio.toLocaleString()}</p>
    </div>
  );
};

export default PrecioBitcoin;
