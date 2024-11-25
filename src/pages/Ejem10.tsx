import ComponenteConProps from "../components/ComponenteConProps";

export default function Ejem10() {
    const datos = {
        mensaje: "hola",
        valor: 10,
        activo: true,
        profesores: ['angel', 'bea', 'pepe', 'isabel'],
        miFuncion: (num:number) => num * num,
        miJsx: <p>Soy un JSX</p>
    }
    return <ComponenteConProps {...datos}  ></ComponenteConProps>

}