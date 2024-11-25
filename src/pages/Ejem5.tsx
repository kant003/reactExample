import ComponenteConProps from "../components/ComponenteConProps";

function Saludador({nombre, apellido}: {nombre: string, apellido: string}) {
    return <p>Hola {nombre} {apellido} </p>;
}


export default function Ejem5() {
    return  <ComponenteConProps
    mensaje="hola"
    valor={10}
    activo={true}
    profesores={['angel', 'bea', 'pepe', 'isabel']}
    miFuncion={(num:number) => num * num}
    miJsx={<p>Soy un JSX</p>}
    otroComponente={<Saludador nombre="Juan" apellido="Perez" />}
  ></ComponenteConProps>

}