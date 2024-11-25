interface ComponenteConPropsProps {
    mensaje: string;
    valor: number;
    activo: boolean;
    profesores: string[];
    miFuncion: (valor: number) => number;
    miJsx: JSX.Element;
    otroComponente?: React.ReactNode;
}
function ComponenteConProps(props: ComponenteConPropsProps) {
    return <ul>
        <li>{props.mensaje}</li>
        <li>{props.valor}</li>
        <li>{props.activo?'Verdadero':'Falso'}</li>
        <li>{props.profesores.join(',')}</li>
        <li>{[1,2,3,4].map(props.miFuncion).join(',')}</li>
        <li>{props.miJsx}</li>
        <li>{props.otroComponente}</li>
    </ul>;
}

export default ComponenteConProps;