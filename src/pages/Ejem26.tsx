/*
*/


import { useState, ChangeEvent, FormEvent } from "react";
interface FormValues {
  [key: string]: string; // Permite que los valores sean cadenas dinámicas
}

function useForm<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}



export default function Ejem26() {
  const { values, handleChange, reset } = useForm({
    nombre: "",
    correo: "",
  });

  const manejarEnvio = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nombre: ${values.nombre}\nCorreo: ${values.correo}`);
    reset();
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={values.nombre} onChange={handleChange} />
      </label>
      <label>
        Correo:
        <input type="email" name="correo" value={values.correo} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
