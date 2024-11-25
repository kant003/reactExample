interface Props{
    mensaje: string;
    formateador: (v: string) => string;
}
function Componente({mensaje, formateador}: Props) {
    return <div>El mensaje es {formateador(mensaje)}</div>
}

export default function Ejem7() {
    const pasarAMayusculas = (v: string) => v.toUpperCase();
    //const pasarAMinusculas = (v: string) => v.toLowerCase();
    return <Componente mensaje="Hola mundo" formateador={pasarAMayusculas} />;
}