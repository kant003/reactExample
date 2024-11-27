/*
Crea un formulario que permita guardar un post en una base de datos.
Para ello usaremos el simulador de API JSONPlaceholder, que nos permite hacer peticiones HTTP a una URL y simula el comportamiento de una API real.

los datos a guardar son:
- title: string
- body:  string
- userId: number

*/
import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setMensaje('');
    setEnviando(true);

    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!respuesta.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const datos = await respuesta.json();
      console.log('Respuesta del servidor:', datos);
      setMensaje('Registro exitoso');
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Formulario de Registro</h2>
      <form onSubmit={manejarEnvio} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={manejarCambio}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={manejarCambio}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={manejarCambio}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button
          type="submit"
          disabled={enviando}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: enviando ? 'not-allowed' : 'pointer',
          }}
        >
          {enviando ? 'Enviando...' : 'Registrar'}
        </button>
      </form>
      {mensaje && <p style={{ marginTop: '20px', color: mensaje.includes('Error') ? 'red' : 'green' }}>{mensaje}</p>}
    </div>
  );
};

export default FormularioRegistro;
